/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onEnterZone('Tami', () => {
    currentPopup =  WA.ui.openPopup("Tami","Hier sitzt Tamara. Sie ist zuständig für unser Marketing. Let's get in touch?",[
    {
     'label': "LinkedIn",
     'className': "primary",
     callback: (popup) => {
     	       WA.nav.openTab('https://www.linkedin.com/in/tamara-katja-frast-7709a71ab/');
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


WA.room.onLeaveZone('clock', closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
