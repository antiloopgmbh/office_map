var p=e=>`
    <html>
        <style>
            body {
                font-family: sans-serif;
                background-color: #f6f6f6;
                color: #14304c;
                line-height: 1.5;
                padding: 1.5rem 1rem;
            }

            h1 {
                margin-top: 0;
            }

            .inthehouse-headline {
                margin: 0;
                margin-bottom: 0.5rem;
            }

            .inthehouse-profile {
                display: inline-flex;
                align-items: center;
                margin-bottom: 0.25rem;
                padding: 4px 6px;
                border: 1px solid #e5e7eb;
                border-radius: 4px;
                font-size: 14px;
                color: inherit;
                text-decoration: none;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px -1px rgba(0, 0, 0, 0.1)
            }

            .inthehouse-profile img {
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.5rem;
                border-radius: 50%;
            }

            .weAre {
                margin: -1.5rem -1rem;
                padding: 1.5rem 1.5rem;
                background-color: #f3f4f6;
            }

            .weAre ul {
                display: grid;
                grid-template-columns: repeat(1,minmax(0,1fr));
                gap: 1.5rem;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            .weAre ul li {
                display: flex;
                flex-direction: column;
                grid-column: span 1/span 1;
                border-radius: 0.5rem;
                background-color: #fff;
                text-align: center;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px -1px rgba(0, 0, 0, 0.1)
            }

            .weAre-top {
                display: flex;
                flex: 1 1 0%;
                flex-direction: column;
                padding: 2rem;
            }

            .weAre-top img {
                display: block;
                vertical-align: middle;
                flex-shrink: 0;
                width: 6rem;
                height: 6rem;
                margin-left: auto;
                margin-right: auto;
                border-radius: 9999px;
            }

            .weAre-name {
                display: block;
                margin-top: 1.5rem;
                font-size: 1rem;
                font-weight: 500;
            }

            .weAre-secondary {
                display: block;
                margin-top: 0.25rem;
                color: #6b7280;
                font-size: 0.875rem;
            }

            .weAre-bottom {
                display: flex;
                margin-top: -1px;
                border-top: 1px solid #e5e7eb;
            }

            .weAre-bottom a {
                display: flex;
                flex: 1 1 0%;
                justify-content: center;
                align-items: center;
                width: 0;
                color: #14304c;
                font-weight: 600;
                font-size: .875rem;
                line-height: 1.25rem;
                padding-top: 1rem;
                padding-bottom: 1rem;
                text-decoration: none;
            }

            .weAre-bottom a:nth-child(1) {
                border-bottom-left-radius: 0.5rem;
                border-right: 1px solid #e5e7eb;
            }

            .weAre-bottom a:nth-child(2) {
                border-bottom-right-radius: 0.5rem;
            }

            .weAre-bottom a:hover {
                color: #56eaff;
            }

            .weAre-bottom a svg {
                width: 1.25rem;
                height: 1.25rem;
                color: #9ca3af;
            }

            .weAre-bottom a span {
                display: inline-block;
                margin-left: 0.75rem;
            }

            @media (min-width: 640px) {
                .weAre ul {
                    grid-template-columns: repeat(2,minmax(0,1fr));
                }
            }

            @media (min-width: 768px) {
                .weAre ul {
                    grid-template-columns: repeat(3,minmax(0,1fr));
                }
            }

            @media (min-width: 1024px) {
                .weAre ul {
                    grid-template-columns: repeat(4,minmax(0,1fr));
                }
            }
            </style>
        <body>
            ${e}
        </body>
    </html>`,g=e=>{let o=`
        <h1>Who is in the house:</h1>
        ${e.length?e.map(t=>`
                <h4 class="inthehouse-headline">${t.title}</h4>
                ${t.users.map(a=>`<a href="${a.url}" class="inthehouse-profile"><img src="${a.image}"> <span>${a.name}</span></a>`).join(" ")}`).join("<br><br>"):"No information available"}
    `;return p(o)},b=e=>{let o=`
        <div class="weAre">
            <h1>Hall of fame:</h1>
            <ul>
                ${e.map(t=>`
                        <li>
                            <div class="weAre-item">
                                <div class="weAre-top">
                                    <img src="${t.image}" alt="">
                                    <span class="weAre-name">${t.name}</span>
                                    <span class="weAre-secondary">${t.tzLabel}</span>
                                </div>
                                <div class="weAre-bottom">
                                    <a href="${t.url}">
                                        <svg class="h-5 w-5 text-gray-400" x-description="Heroicon name: mini/phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span>Slack</span>
                                    </a>
                                    <a href="mailto:${t.email}">
                                        <svg class="h-5 w-5 text-gray-400" x-description="Heroicon name: mini/envelope" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                                        </svg>
                                        <span>Email</span>
                                    </a>
                                </div>
                            </div>
                        </li>`).join("")}
            </ul>
        </div>
    `;return p(o)},h=[{title:"What is the capital of Australia?",answers:["Canberra","Sydney","Melbourne","Brisbane"]},{title:"When was Antiloop GmbH registered?",answers:[2010,1999,2001,2011,2005]},{title:"When was the First Austrian Republic founded?",answers:[1919,1945,1812,1914,1918,1989]},{title:"Who owns GitHub company?",answers:["Microsoft","Adobe","Atlassian","Salesforce"]},{title:"What year was the first iPhone released?",answers:[2007,2005,2003,2009,2010]},{title:"How many feet are in a yard?",answers:[3,1.5,2,2.5,10,100]},{title:"What is the most commonly spoken language in Brazil?",answers:["Portuguese","Spanish","English","Brazilian"]},{title:"How many countries are in the European Union",answers:[27,30,25,26,28,24,29]},{title:"In Florida, only on Sundays, it is illegal for a single woman to...",answers:["Skydive","Swim","Cook","Drive","Groceries"]},{title:"What was the first fruit that was eaten on the moon?",answers:["Peach","Apple","Pineapple","Orange","Lemon"]},{title:"The computer mouse speed is measured in what?",answers:["Mickeys","Meters","Kilometers","Bytes"]},{title:"Do cows moo with regional accents?",answers:["Yes","No"]},{title:"What animal is on Firefox logo?",answers:["Red panda","Fox","Cat","Cheetah","Wolf"]},{title:"1 Petabyte = ?",answers:["1024 TB","1024 GB","1024 Exabyte","1024 Yottabyte"]},{title:"When was google.com registered?",answers:[1997,2e3,2003,1998,1999,2001]},{title:"Which country has the most pyramids?",answers:["Sudan","Egypt","Mexico","Peru","Iraq","Guatemala"]},{title:"How long is an Olympic swimming pool (m)?",answers:[50,60,10,100,45,75]},{title:"How many languages are written from right to left?",answers:[12,2,4,10,6,5,8]},{title:"What is Earth's largest continent?",answers:["Asia","Europe","Antarctica","Oceania"]},{title:"In what country would you find Lake Bled?",answers:["Slovenia","Slovakia","Serbia","Romania","Estonia"]},{title:"What is the symbol for potassium?",answers:["K","P","Pt","Po","Pm"]},{title:"The oldest zoo in the world is situated in...",answers:["Vienna","London","Moskow","Paris","Tokyo"]}],d=["What celebrity do most people say you look like?","If you could try any food, what would it be?","What did you want to be when you grew up?","Would you rather live in a city or a town?","What is your favorite color and why?","Which movie made you laugh the most?","Do you know how to speak more than one language?","How would you rate your laugh out of 10?","How tall are you?","Who is your favorite Disney character?","Do you prefer big dogs or small dogs?","Which of your teachers is most memorable and why?","Would you rather stay at a hotel or an AirBNB?","What is your hobby?","What piece of advice would you share with your younger self?","What is your \u201Cwhen I was your age\u2026\u201D story?","Which beverage goes best with pizza?","What is your standard office lunch?","What do your family and friends think you do all day?","How would you describe your job to a five year old?","Where is your favorite vacation spot?","What is the best dessert?","What is your favorite season?","What is the best kitchen gadget?","Are you more productive in the morning or at night?","What is your most used phone app?","Which trap in Home Alone was the best?","Does your car have a name? What is it?","What is a weird fact you know?","Pull out your phone; what is your most used emoji?"];const l="http://localhost/slack";let s=null;WA.onInit().then(()=>{(function(){[{name:"antiloopEst",text:"Antiloop GmbH (Est. 2010)"},{name:"sprykerPartner",text:"Spryker Solution Partner"},{name:"pimcorePartner",text:"Pimcore Gold Partner"},{name:"clock",text(){const o=new Date;return`It's ${o.getHours()}:${o.getMinutes()}`}},{name:"fridge",text:"We have an open-door policy, even with the beer fridge."}].map(o=>{WA.room.onEnterLayer(`${o.name}Zone`).subscribe(()=>{s=WA.ui.openPopup(`${o.name}Popup`,typeof o.text=="function"?o.text():o.text,[])}),WA.room.onLeaveLayer(`${o.name}Zone`).subscribe(c)}),s=WA.ui.openPopup("enterZonePopup",`Welcome to Antiloop!

        In our interactive office you will get a first impression of us - as you can see, we love our job : -)
        
        Good to know:
        - Preferred Browser: Chrome
        - Control with WASD or arrow keys
        - To conduct a video chat, walk with your character to one of our colleagues. As soon as a circle appears, you can start.

        Have fun!`,[{label:"GO",callback(o){o.close()}}])})(),function(){let e=null,o=!1,t=()=>{e!=null&&WA.ui.modal.openModal({title:"Who is in the House",src:"data:text/html;charset=utf-8,"+encodeURIComponent(g(e)),allow:"fullscreen",position:"right"})};fetch(`${l}/inTheOffice`).then(async a=>{a.status==204?e=[]:e=await a.json(),o&&t()}),WA.room.onEnterLayer("inTheHouseZone").subscribe(()=>{t(),o=!0}),WA.room.onLeaveLayer("inTheHouseZone").subscribe(()=>{WA.ui.modal.closeModal(),o=!1})}(),function(){let e=null,o=!1,t=()=>{e!=null&&WA.ui.modal.openModal({title:"We are",src:"data:text/html;charset=utf-8,"+encodeURIComponent(b(e)),allow:"fullscreen",position:"center"})};fetch(`${l}/profiles`).then(async a=>{a.status==204?e=[]:e=await a.json(),o&&t()}),WA.room.onEnterLayer("weAreZone").subscribe(()=>{t(),o=!0}),WA.room.onLeaveLayer("weAreZone").subscribe(()=>{WA.ui.modal.closeModal(),o=!1})}(),function(){let e;WA.room.onEnterLayer("meetingRoomZone").subscribe(()=>{e=WA.ui.displayActionMessage({message:"Press 'Space' to open #general channel in Slack",callback(){WA.nav.openTab("slack://channel?team=T07UQTGP3&id=C07UQLQDA"),e.remove()}})}),WA.room.onLeaveLayer("meetingRoomZone").subscribe(()=>{e&&e.remove()})}(),function(){let e,o,t=!1,a=!1;WA.room.onEnterLayer("whiteboardZone").subscribe(()=>{t=!0,e=WA.ui.displayActionMessage({message:"Loading...",callback(){}}),fetch(`${l}/whiteboard`).then(async r=>{if(e.remove(),!!t)if(r.status==204)e=WA.ui.displayActionMessage({message:"Press 'Space' to open a new Whiteboard",callback(){WA.nav.openTab("https://webwhiteboard.com/"),e.remove()}});else{let i=await r.json();e=WA.ui.displayActionMessage({message:"Press 'Space' to join the Whiteboard",callback(){WA.nav.openTab(i.url),e.remove()}})}})}),WA.room.onLeaveLayer("whiteboardZone").subscribe(()=>{t=!1,e&&e.remove()}),WA.room.onEnterLayer("whiteboardWatchersZone").subscribe(()=>{a=!0,o=WA.ui.displayActionMessage({message:"Loading...",callback(){}}),fetch(`${l}/whiteboard`).then(async r=>{if(o.remove(),!!a)if(r.status==204)o=WA.ui.displayActionMessage({message:"No Whiteboard was shared",callback(){e.remove()}});else{let i=await r.json();o=WA.ui.displayActionMessage({message:"Press 'Space' to join the Whiteboard",callback(){WA.nav.openTab(i.url),e.remove()}})}})}),WA.room.onLeaveLayer("whiteboardWatchersZone").subscribe(()=>{a=!1,o&&o.remove()})}(),function(){let e;WA.room.onEnterLayer("antiloopZone").subscribe(()=>{e=WA.ui.displayActionMessage({message:"Press 'Space' to open Antiloop website",callback(){WA.nav.openTab("https://www.antiloop.com/"),e.remove()}})}),WA.room.onLeaveLayer("antiloopZone").subscribe(()=>{e&&e.remove()})}(),function(){let e,o,t=!1,a=!1;WA.room.onEnterLayer("gameZone").subscribe(()=>{t=!0,e=WA.ui.displayActionMessage({message:"Loading...",callback(){}}),fetch(`${l}/skribbl`).then(async r=>{e.remove(),t&&(r.status==204?e=WA.ui.displayActionMessage({message:"Press 'Space' to create a Skribble game",callback(){WA.nav.openTab("https://skribbl.io/"),e.remove()}}):e=WA.ui.displayActionMessage({message:"A Skribble game was already created",callback(){e.remove()}}))})}),WA.room.onLeaveLayer("gameZone").subscribe(()=>{t=!1,e&&e.remove()}),WA.room.onEnterLayer("gameJoinersZone").subscribe(()=>{a=!0,o=WA.ui.displayActionMessage({message:"Loading...",callback(){}}),fetch(`${l}/skribbl`).then(async r=>{if(o.remove(),!!a)if(r.status==204)o=WA.ui.displayActionMessage({message:"No Skribble game created",callback(){e.remove()}});else{let i=await r.json();o=WA.ui.displayActionMessage({message:"Press 'Space' to join the Skribble game",callback(){WA.nav.openTab(i.url),e.remove()}})}})}),WA.room.onLeaveLayer("gameJoinersZone").subscribe(()=>{a=!1,o&&o.remove()})}(),function(){let e,o=[],t=()=>{if(o.length==h.length)return null;let a=h.filter((i,m)=>!o.includes(m)),r=a[Math.floor(Math.random()*a.length)];return o.push(h.indexOf(r)),r};WA.room.onEnterLayer("triviaGameZone").subscribe(()=>{let a=t();if(!a){e=WA.ui.displayActionMessage({message:"Great job! No questions left.",callback(){e.remove()}}),setTimeout(()=>e.remove(),2e3);return}let r=[a.answers[0],a.answers[Math.floor(Math.random()*(a.answers.length-2+1)+1)]],i=r[Math.floor(Math.random()*r.length)],m=[i,r[r.indexOf(i)?0:1]].map(n=>({label:n==null?void 0:n.toString(),className:"primary",callback:r.indexOf(n)?function(u){u.close(),e=WA.ui.displayActionMessage({message:"Unfortunately you're wrong!",callback(){}}),setTimeout(()=>e.remove(),2e3)}:function(u){u.close(),e=WA.ui.displayActionMessage({message:"Correctly!",callback(){}}),setTimeout(()=>e.remove(),2e3)}}));s=WA.ui.openPopup("triviaGamePopup",a.title,m)}),WA.room.onLeaveLayer("triviaGameZone").subscribe(c)}(),function(){let e,o,t=()=>{if(o.length==d.length)return null;let r=d.filter((m,n)=>!o.includes(n)),i=r[Math.floor(Math.random()*r.length)];return o.push(d.indexOf(i)),i},a=()=>{let r=t(),i=o.length==6;if(c(),!r){e=WA.ui.displayActionMessage({message:"Great job! No questions left.",callback(){e.remove()}}),setTimeout(()=>e.remove(),2e3);return}s=WA.ui.openPopup("icebreakerPopup",r,[{label:i?"Done":"Next",className:"primary",callback(){i?c():a()}}])};WA.room.onEnterLayer("icebreakerZone").subscribe(()=>{o=[],e=WA.ui.displayActionMessage({message:"Press 'Space' to start the Icebreaker Challange.",callback(){e.remove(),a()}})}),WA.room.onLeaveLayer("icebreakerZone").subscribe(()=>{e&&e.remove(),c()})}()}).catch(e=>console.error(e));function c(){!s||(s.close(),s=null)}
