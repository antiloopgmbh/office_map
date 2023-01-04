/// <reference types="@workadventure/iframe-api-typings" />
import { Popup } from "@workadventure/iframe-api-typings";

let currentPopup: Popup | null = null;

const possibilities = [
    [
        { x: 8, y: 6, tile: "mazeWall", layer: "walls" },
        { x: 8, y: 6, tile: "blockCollider", layer: "collisions" },
        { x: 21, y: 3, tile: "mazeWall", layer: "walls" },
        { x: 21, y: 3, tile: "blockCollider", layer: "collisions" },
        { x: 1, y: 16, tile: "mazeWall", layer: "walls" },
        { x: 1, y: 16, tile: "blockCollider", layer: "collisions" },
    ],
    [
        { x: 8, y: 6, tile: "mazeWall", layer: "walls" },
        { x: 8, y: 6, tile: "blockCollider", layer: "collisions" },
        { x: 20, y: 4, tile: "mazeWall", layer: "walls" },
        { x: 20, y: 4, tile: "blockCollider", layer: "collisions" },
        { x: 1, y: 16, tile: "mazeWall", layer: "walls" },
        { x: 1, y: 16, tile: "blockCollider", layer: "collisions" },
    ],
    [
        { x: 15, y: 5, tile: "mazeWall", layer: "walls" },
        { x: 15, y: 5, tile: "blockCollider", layer: "collisions" },
        { x: 21, y: 3, tile: "mazeWall", layer: "walls" },
        { x: 21, y: 3, tile: "blockCollider", layer: "collisions" },
        { x: 1, y: 16, tile: "mazeWall", layer: "walls" },
        { x: 1, y: 16, tile: "blockCollider", layer: "collisions" },
    ],
    [
        { x: 2, y: 15, tile: "mazeWall", layer: "walls" },
        { x: 2, y: 15, tile: "blockCollider", layer: "collisions" },
        { x: 15, y: 5, tile: "mazeWall", layer: "walls" },
        { x: 15, y: 5, tile: "blockCollider", layer: "collisions" },
        { x: 21, y: 3, tile: "mazeWall", layer: "walls" },
        { x: 21, y: 3, tile: "blockCollider", layer: "collisions" },
    ]
];

WA.onInit().then(() => {
    currentPopup = WA.ui.openPopup('welcomePopup', 'Oh no, you\'ve been dropped into the servers. Find out the way!', [{
        label: 'Start',
        className: 'primary',
        callback() {
            closePopup();
        }
    }]);

    WA.room.setTiles(possibilities[Math.floor(Math.random()*possibilities.length)]);
}).catch(e => console.error(e));

function closePopup() {
    if (!currentPopup)
        return;

    currentPopup.close();
    currentPopup = null;
}

export {};
