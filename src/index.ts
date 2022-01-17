/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;

let linkedIn = [
    {'zoneName':'Tami', 'name': 'Tamara', 'url': 'https://www.linkedin.com/in/tamara-katja-frast/'},
    {'zoneName':'Gerold', 'name': 'Gerold', 'url': 'https://www.linkedin.com/in/gerold-böhler-054437170/'},
    {'zoneName':'Matthias', 'name': 'Matthias', 'url': 'https://www.linkedin.com/in/matthias-frick-96775110a/'},
    {'zoneName':'Herbert', 'name': 'Herbert', 'url': 'https://www.linkedin.com/in/herbert-scheffknecht-7a905b32/'},
    {'zoneName':'Christoph', 'name': 'Christoph', 'url': ''},
    {'zoneName':'Florian', 'name': 'Florian', 'url': 'https://www.linkedin.com/in/florian-voelker/'},
];

WA.room.onEnterZone(linkedIn[0].zoneName, () => {
	currentPopup =  WA.ui.openPopup('Office1', "Hier sitzt "+linkedIn[0].name+". Let's get in touch?",[
	    {
		'label': "LinkedIn",
		'className': "primary",
		callback: (popup) => {
     		WA.nav.openTab(linkedIn[0].url);
	    }
    },
    {
    label: "Schließen",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
})

WA.room.onLeaveZone(linkedIn[0].zoneName, () => {closePopUp();})
WA.room.onLeaveZone(linkedIn[1].zoneName, () => {closePopUp();})
WA.room.onLeaveZone(linkedIn[2].zoneName, () => {closePopUp();})
WA.room.onLeaveZone(linkedIn[3].zoneName, () => {closePopUp();})
WA.room.onLeaveZone(linkedIn[4].zoneName, () => {closePopUp();})
WA.room.onLeaveZone(linkedIn[5].zoneName, () => {closePopUp();})

WA.room.onEnterZone(linkedIn[1].zoneName, () => {
    currentPopup =  WA.ui.openPopup('Office1', "Hier sitzt "+linkedIn[1].name+". Let's get in touch?",[
	{
		'label': "LinkedIn",
		'className': "primary",
		callback: (popup) => {
     		WA.nav.openTab(linkedIn[1].url);
	    }
    },
    {
    label: "Schließen",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
});

// Number Matthias
WA.room.onEnterZone(linkedIn[2].zoneName, () => {
	currentPopup =  WA.ui.openPopup('Office2', "Hier sitzt "+linkedIn[2].name+". Let's get in touch?",[
	    {
		'label': "LinkedIn",
		'className': "primary",
		callback: (popup) => {
     		WA.nav.openTab(linkedIn[2].url);
	    }
    },
    {
    label: "Schließen",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
});

// Number Herbert
WA.room.onEnterZone(linkedIn[3].zoneName, () => {
	currentPopup =  WA.ui.openPopup('Office2', "Hier sitzt "+linkedIn[3].name+". Let's get in touch?",[
	    {
		'label': "LinkedIn",
		'className': "primary",
		callback: (popup) => {
     		WA.nav.openTab(linkedIn[3].url);
	    }
    },
    {
    label: "Schließen",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
});

// Number Christoph
WA.room.onEnterZone(linkedIn[4].zoneName, () => {
	currentPopup =  WA.ui.openPopup('Office2', "Hier sitzt "+linkedIn[4].name+". Let's get in touch?",[
	    {
		'label': "LinkedIn",
		'className': "primary",
		callback: (popup) => {
     		WA.nav.openTab(linkedIn[4].url);
	    }
    },
    {
    label: "Schließen",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
})

// Number Florian
WA.room.onEnterZone(linkedIn[5].zoneName, () => {
	currentPopup =  WA.ui.openPopup('Office3', "Hier sitzt "+linkedIn[5].name+". Let's get in touch?",[
	    {
		'label': "LinkedIn",
		'className': "primary",
		callback: (popup) => {
     		WA.nav.openTab(linkedIn[5].url);
	    }
    },
    {
    label: "Schließen",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
});


// HomePage Popup
WA.room.onEnterZone('Antiloop_Homepage', () => {
	currentPopup =  WA.ui.openPopup('Homepage', "Neugierig? Besuch unsere Homepage",[
	    {
		'label': "Homepage",
		'className': "primary",
		callback: (popup) => {
     		WA.nav.openTab('https://antiloop.com');
	    }
    },
    {
    label: "Schließen",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
});

WA.room.onLeaveZone('Antiloop_Homepage', closePopUp);

//Football
// HomePage Popup
WA.room.onEnterZone('Football', () => {
    currentPopup =  WA.ui.openPopup('Football', "Komm doch mal auf ein Tischkicker-Match vorbei. Antiloop-CEO Matthias ist leidenschaftlicher Fußballer und freut sich auf einen Kennenlernen mit Dir!",[
	{
	    'label': "Gleich Termin ausmachen",
	    'className': "primary",
	    callback: (popup) => {
     		WA.nav.openTab('https://calendly.com/antiloop-matthias-frick');
	    }
    },
    {
    label: "Schließen",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
});

WA.room.onLeaveZone('Football', closePopUp);

//Football
// HomePage Popup

WA.room.onEnterZone('Hoody', () => {
    currentPopup =  WA.ui.openPopup('Hoody', "Ein Notebook zieht Dich einfach an? Dann passt unser cooler Antiloop-Hoodie perfekt zu Dir! Schreib uns Deinen Namen, Deine Größe und Deine Post-Anschrift. Oder noch besser: Besuche uns doch im Büro, wir freuen uns auf Deinen Anruf vorab!",[
	{
	    'label': "Gleich schreiben",
	    'className': "primary",
	    callback: (popup) => {
     		WA.nav.openTab('mailto:office@antiloop.com?subject=Hoodie!&body=Name:  Größe:   Post-Adresse:  ');
	    }
    },
    {
    label: "Schließen",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
});

WA.room.onLeaveZone('Hoody', closePopUp);


WA.room.onEnterZone('beerFridge', () => {
    currentPopup =  WA.ui.openPopup('beerFridge', "Bei uns herrscht OpenDoor-Policy, auch beim Bierkühlschrank",[
	{
	    'label': "Bierzeit buchen",
	    'className': "primary",
	    callback: (popup) => {
     		WA.nav.openTab('https://calendly.com/antiloop-gerold-boehler');
	    }
    },
    {
    label: "Später",
    className: "normal",
    callback: (popup) => {
        // Close the popup when the "Close" button is pressed.
        popup.close();
      }
     }
   ]);
});

WA.room.onLeaveZone('beerFridge', closePopUp);

// Social Media things
WA.room.onEnterZone('social_LinkedIn', () => {
    currentPopup =  WA.ui.openPopup('FollowUs', "",[
	{
	    'label': "LinkedIn",
	    'className': "primary",
	    callback: (popup) => {
     		WA.nav.openTab('https://www.linkedin.com/company/antiloopgmbh/');
	    }
    }
   ]);
});

WA.room.onLeaveZone('social_LinkedIn', closePopUp);

WA.room.onEnterZone('social_Instagram', () => {
    currentPopup =  WA.ui.openPopup('FollowUs', "",[
	{
	    'label': "Instagram",
	    'className': "primary",
	    callback: (popup) => {
     		WA.nav.openTab('https://www.instagram.com/antiloopgmbh/');
	    }
    }
   ]);
});

WA.room.onLeaveZone('social_Instagram', closePopUp);

WA.room.onEnterZone('social_Facebook', () => {
    currentPopup =  WA.ui.openPopup('FollowUs', "",[
	{
	    'label': "Facebook",
	    'className': "primary",
	    callback: (popup) => {
     		WA.nav.openTab('https://www.facebook.com/antiloopgmbh');
	    }
    }
   ]);
});

WA.room.onLeaveZone('social_Facebook', closePopUp);

WA.room.onEnterZone('social_Twitter', () => {
    currentPopup =  WA.ui.openPopup('FollowUs', "",[
	{
	    'label': "Twitter",
	    'className': "primary",
	    callback: (popup) => {
     		WA.nav.openTab('https://twitter.com/antiloopgmbh');
	    }
    }
   ]);
});

WA.room.onLeaveZone('social_Twitter', closePopUp);

WA.room.onEnterZone('social_Twitter', () => {
    currentPopup =  WA.ui.openPopup('FollowUs', "",[
        {
            'label': "Twitter",
            'className': "primary",
            callback: (popup) => {
                WA.nav.openTab('https://twitter.com/antiloopgmbh');
            }
        }
    ]);
});

WA.room.onLeaveZone('social_Twitter', closePopUp);


WA.room.onEnterZone('Antiloop_welcome', () => {
    currentPopup =  WA.ui.openPopup('Antiloop_welcome', "Willkommen im Antiloop Büro, eine interaktive Möglichkeit einen Eindruck unseres Büros zu bekommen." +
        "\n\n- Diese Welt funktioniert am Besten in Chrome" +
        "\n\n- Steuerung mit WASD oder Pfeiltasten" +
        "\n\n- Um mit anderen in Kontakt zu treten einfach näher heranlaufen bis ein Kreis erscheint um einen Videochat zu starten" +
        "\n\nViel Spaß im Büro, vielleicht triffst du den ein oder anderen Mitarbeiter oder findest unser Gewinnspiel",[
        {
            'label': "Verstanden",
            'className': "primary",
            callback: (popup) => {
                popup.close();
            }
        }
    ]);
});

WA.room.onLeaveZone('Antiloop_welcome', closePopUp);

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
