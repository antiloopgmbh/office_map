/// <reference types="@workadventure/iframe-api-typings" />
import { ActionMessage, ButtonDescriptor, Popup } from "@workadventure/iframe-api-typings";
import inTheHouseIframe from './iframes/inTheHouse';
import weAreIframe from './iframes/weAre';
import questionsAnswers from './trivia/questionsAnswers';
import questions from './icebreaker/questions';

const apiURL = 'http://localhost/slack';

let currentPopup: Popup | null = null;

WA.onInit().then(() => {
    // Text popups
    (function() {
        const textPopups = [{
            name: 'antiloopEst',
            text: 'Antiloop GmbH (Est. 2010)'
        }, {
            name: 'sprykerPartner',
            text: 'Spryker Solution Partner'
        }, {
            name: 'pimcorePartner',
            text: 'Pimcore Gold Partner'
        }, {
            name: 'clock',
            text() {
                const today = new Date();
    
                return `It's ${today.getHours()}:${today.getMinutes()}`;
            }
        }, {
            name: 'fridge',
            text: 'We have an open-door policy, even with the beer fridge.'
        }];
    
        textPopups.map((popup) => {
            WA.room.onEnterLayer(`${popup.name}Zone`).subscribe(() => {
                currentPopup = WA.ui.openPopup(`${popup.name}Popup`, typeof popup.text == 'function' ? popup.text() : popup.text, []);
            });
    
            WA.room.onLeaveLayer(`${popup.name}Zone`).subscribe(closePopup);
        });
    })();

    // Who is in the house
    (function() {
        let employeesInTheHouse: object[] | null = null,
            isInTheHouseZone = false,
            openModal = () => {
                if (employeesInTheHouse == null)
                    return;
                
                WA.ui.modal.openModal({
                    title: 'Who is in the House',
                    src: 'data:text/html;charset=utf-8,' + encodeURIComponent(inTheHouseIframe(employeesInTheHouse)),
                    allow: 'fullscreen',
                    position: 'right',
                });
            }

        fetch(`${apiURL}/inTheOffice`).then(async response => {
            if (response.status == 204)
                employeesInTheHouse = [];
            else
                employeesInTheHouse = await response.json();


            if (isInTheHouseZone)
                openModal();
        });
        WA.room.onEnterLayer('inTheHouseZone').subscribe(() => {
            openModal();
            isInTheHouseZone = true;
        });
        WA.room.onLeaveLayer('inTheHouseZone').subscribe(() => {
            WA.ui.modal.closeModal();
            isInTheHouseZone = false;
        });
    })();

    // Employees
    (function() {
        let employees: object[] | null = null,
            isInWeAre = false,
            openModal = () => {
                if (employees == null)
                    return;
                
                WA.ui.modal.openModal({
                    title: 'We are',
                    src: 'data:text/html;charset=utf-8,' + encodeURIComponent(weAreIframe(employees)),
                    allow: 'fullscreen',
                    position: 'center',
                });
            }

        fetch(`${apiURL}/profiles`).then(async response => {
            if (response.status == 204)
                employees = [];
            else
                employees = await response.json();


            if (isInWeAre)
                openModal();
        });
        WA.room.onEnterLayer('weAreZone').subscribe(() => {
            openModal();
            isInWeAre = true;
        });
        WA.room.onLeaveLayer('weAreZone').subscribe(() => {
            WA.ui.modal.closeModal();
            isInWeAre = false;
        });
    })();

    // Meeting
    (function() {
        let triggerMessage: ActionMessage;

        WA.room.onEnterLayer('meetingRoomZone').subscribe(() => {
            triggerMessage = WA.ui.displayActionMessage({
                message: "Press 'Space' to open #general channel in Slack",
                callback() {
                    WA.nav.openTab('slack://channel?team=T07UQTGP3&id=C07UQLQDA');
                    triggerMessage.remove();
                }
            });
        });

        WA.room.onLeaveLayer('meetingRoomZone').subscribe(() => {
            if (triggerMessage)
                triggerMessage.remove();
        });
    })();

    // Whiteboard
    (function() {
        let triggerMessage: ActionMessage,
            triggerWatchersMessage: ActionMessage,
            isInZone = false,
            isInWatchersZone = false;

        WA.room.onEnterLayer('whiteboardZone').subscribe(() => {
            isInZone = true;

            triggerMessage = WA.ui.displayActionMessage({
                message: "Loading...",
                callback() {},
            });

            fetch(`${apiURL}/whiteboard`).then(async response => {
                triggerMessage.remove();

                if (!isInZone)
                    return;

                if (response.status == 204) {
                    triggerMessage = WA.ui.displayActionMessage({
                        message: "Press 'Space' to open a new Whiteboard",
                        callback() {
                            WA.nav.openTab('https://webwhiteboard.com/');
                            triggerMessage.remove();
                        }
                    });
                } else {
                    let data = await response.json();

                    triggerMessage = WA.ui.displayActionMessage({
                        message: "Press 'Space' to join the Whiteboard",
                        callback() {
                            WA.nav.openTab(data.url);
                            triggerMessage.remove();
                        }
                    });
                }
            });
        });

        WA.room.onLeaveLayer('whiteboardZone').subscribe(() => {
            isInZone = false;

            if (triggerMessage)
                triggerMessage.remove();
        });

        WA.room.onEnterLayer('whiteboardWatchersZone').subscribe(() => {
            isInWatchersZone = true;

            triggerWatchersMessage = WA.ui.displayActionMessage({
                message: "Loading...",
                callback() {},
            });

            fetch(`${apiURL}/whiteboard`).then(async response => {
                triggerWatchersMessage.remove();

                if (!isInWatchersZone)
                    return;

                if (response.status == 204) {
                    triggerWatchersMessage = WA.ui.displayActionMessage({
                        message: "No Whiteboard was shared",
                        callback() {
                            triggerMessage.remove();
                        }
                    });
                } else {
                    let data = await response.json();

                    triggerWatchersMessage = WA.ui.displayActionMessage({
                        message: "Press 'Space' to join the Whiteboard",
                        callback() {
                            WA.nav.openTab(data.url);
                            triggerMessage.remove();
                        }
                    });
                }
            });
        });

        WA.room.onLeaveLayer('whiteboardWatchersZone').subscribe(() => {
            isInWatchersZone = false;

            if (triggerWatchersMessage)
                triggerWatchersMessage.remove();
        });
    })();

    // Antiloop
    (function() {
        let triggerMessage: ActionMessage;

        WA.room.onEnterLayer('antiloopZone').subscribe(() => {
            triggerMessage = WA.ui.displayActionMessage({
                message: "Press 'Space' to open Antiloop website",
                callback() {
                    WA.nav.openTab('https://www.antiloop.com/');
                    triggerMessage.remove();
                }
            });
        });

        WA.room.onLeaveLayer('antiloopZone').subscribe(() => {
            if (triggerMessage)
                triggerMessage.remove();
        });
    })();

    // Game
    (function() {
        let triggerMessage: ActionMessage,
            triggerJoinersMessage: ActionMessage,
            isInGameZone = false,
            isInGameJoinersZone = false;

        WA.room.onEnterLayer('gameZone').subscribe(() => {
            isInGameZone = true;

            triggerMessage = WA.ui.displayActionMessage({
                message: "Loading...",
                callback() {},
            });

            fetch(`${apiURL}/skribbl`).then(async response => {
                triggerMessage.remove();

                if (!isInGameZone)
                    return;

                if (response.status == 204) {
                    triggerMessage = WA.ui.displayActionMessage({
                        message: "Press 'Space' to create a Skribble game",
                        callback() {
                            WA.nav.openTab('https://skribbl.io/');
                            triggerMessage.remove();
                        }
                    });
                } else {
                    triggerMessage = WA.ui.displayActionMessage({
                        message: "A Skribble game was already created",
                        callback() {
                            triggerMessage.remove();
                        }
                    });
                }
            });
        });

        WA.room.onLeaveLayer('gameZone').subscribe(() => {
            isInGameZone = false;

            if (triggerMessage)
                triggerMessage.remove();
        });

        WA.room.onEnterLayer('gameJoinersZone').subscribe(() => {
            isInGameJoinersZone = true;

            triggerJoinersMessage = WA.ui.displayActionMessage({
                message: "Loading...",
                callback() {},
            });

            fetch(`${apiURL}/skribbl`).then(async response => {
                triggerJoinersMessage.remove();

                if (!isInGameJoinersZone)
                    return;

                if (response.status == 204) {
                    triggerJoinersMessage = WA.ui.displayActionMessage({
                        message: "No Skribble game created",
                        callback() {
                            triggerMessage.remove();
                        }
                    });
                } else {
                    let data = await response.json();

                    triggerJoinersMessage = WA.ui.displayActionMessage({
                        message: "Press 'Space' to join the Skribble game",
                        callback() {
                            WA.nav.openTab(data.url);
                            triggerMessage.remove();
                        }
                    });
                }
            });
        });

        WA.room.onLeaveLayer('gameJoinersZone').subscribe(() => {
            isInGameJoinersZone = false;

            if (triggerJoinersMessage)
                triggerJoinersMessage.remove();
        });
    })();

    // Trivia Game
    (function() {
        let triggerMessage: ActionMessage,
            usedQuestions: number[] = [],
            getRandomQuestion = () => {
                if (usedQuestions.length == questionsAnswers.length)
                    return null;

                let lookup = questionsAnswers.filter((value, index) => !usedQuestions.includes(index)),
                    question = lookup[Math.floor(Math.random()*lookup.length)];

                usedQuestions.push(questionsAnswers.indexOf(question));

                return question;
            };

        WA.room.onEnterLayer(`triviaGameZone`).subscribe(() => {
            let question = getRandomQuestion();

            if (!question) {
                triggerMessage = WA.ui.displayActionMessage({
                    message: 'Great job! No questions left.',
                    callback() {
                        triggerMessage.remove();
                    }
                });

                setTimeout(() => triggerMessage.remove(), 2000)
                return;
            }
                
            let answers = [question.answers[0], question.answers[Math.floor(Math.random() * (question.answers.length - 2 + 1) + 1)]],
                randomAnswer = answers[Math.floor(Math.random()*answers.length)],
                buttons: ButtonDescriptor[] = [randomAnswer, answers[!answers.indexOf(randomAnswer) ? 1 : 0]].map(answer => {
                    return {
                        label: answer?.toString(),
                        className: 'primary',
                        callback: !answers.indexOf(answer) ? function(popup: Popup) {
                            popup.close();
                            triggerMessage = WA.ui.displayActionMessage({
                                message: "Correctly!",
                                callback() {}
                            });
                            setTimeout(() => triggerMessage.remove(), 2000)
                        } : function (popup: Popup) {
                            popup.close();
                            triggerMessage = WA.ui.displayActionMessage({
                                message: "Unfortunately you're wrong!",
                                callback() {}
                            });
                            setTimeout(() => triggerMessage.remove(), 2000)
                        }
                    }
                });

            currentPopup = WA.ui.openPopup(`triviaGamePopup`, question.title, buttons);
        });

        WA.room.onLeaveLayer(`triviaGameZone`).subscribe(closePopup);
    })();

    // Icebreaker Game
    (function() {
        let triggerMessage: ActionMessage,
            usedQuestions: number[],
            getRandomQuestion = () => {
                if (usedQuestions.length == questions.length)
                    return null;

                let lookup = questions.filter((value, index) => !usedQuestions.includes(index)),
                    question = lookup[Math.floor(Math.random()*lookup.length)];

                usedQuestions.push(questions.indexOf(question));

                return question;
            },
            createIcebreakerPopup = () => {
                let question = getRandomQuestion(),
                    isLastQuestion = usedQuestions.length == 6;
                
                closePopup();

                if (!question) {
                    triggerMessage = WA.ui.displayActionMessage({
                        message: 'Great job! No questions left.',
                        callback() {
                            triggerMessage.remove();
                        }
                    });

                    setTimeout(() => triggerMessage.remove(), 2000)
                    return;
                }

                currentPopup = WA.ui.openPopup(`icebreakerPopup`, question, [{
                    label: !isLastQuestion ? 'Next' : 'Done',
                    className: 'primary',
                    callback() {
                        if (!isLastQuestion)
                            createIcebreakerPopup();
                        else
                            closePopup();
                    }
                }]);
            }

        WA.room.onEnterLayer(`icebreakerZone`).subscribe(() => {
            usedQuestions = [];

            triggerMessage = WA.ui.displayActionMessage({
                message: "Press 'Space' to start the Icebreaker Challange.",
                callback() {
                    triggerMessage.remove();
                    createIcebreakerPopup();
                }
            });
        });
        
        WA.room.onLeaveLayer(`icebreakerZone`).subscribe(() => {
            if (triggerMessage)
                triggerMessage.remove();
            closePopup();
        });
    })();
}).catch(e => console.error(e));

function closePopup() {
    if (!currentPopup)
        return;

    currentPopup.close();
    currentPopup = null;
}

export {};
