let l=null;const e=[[{x:8,y:6,tile:"mazeWall",layer:"walls"},{x:8,y:6,tile:"blockCollider",layer:"collisions"},{x:21,y:3,tile:"mazeWall",layer:"walls"},{x:21,y:3,tile:"blockCollider",layer:"collisions"},{x:1,y:16,tile:"mazeWall",layer:"walls"},{x:1,y:16,tile:"blockCollider",layer:"collisions"}],[{x:8,y:6,tile:"mazeWall",layer:"walls"},{x:8,y:6,tile:"blockCollider",layer:"collisions"},{x:20,y:4,tile:"mazeWall",layer:"walls"},{x:20,y:4,tile:"blockCollider",layer:"collisions"},{x:1,y:16,tile:"mazeWall",layer:"walls"},{x:1,y:16,tile:"blockCollider",layer:"collisions"}],[{x:15,y:5,tile:"mazeWall",layer:"walls"},{x:15,y:5,tile:"blockCollider",layer:"collisions"},{x:21,y:3,tile:"mazeWall",layer:"walls"},{x:21,y:3,tile:"blockCollider",layer:"collisions"},{x:1,y:16,tile:"mazeWall",layer:"walls"},{x:1,y:16,tile:"blockCollider",layer:"collisions"}],[{x:2,y:15,tile:"mazeWall",layer:"walls"},{x:2,y:15,tile:"blockCollider",layer:"collisions"},{x:15,y:5,tile:"mazeWall",layer:"walls"},{x:15,y:5,tile:"blockCollider",layer:"collisions"},{x:21,y:3,tile:"mazeWall",layer:"walls"},{x:21,y:3,tile:"blockCollider",layer:"collisions"}]];WA.onInit().then(()=>{l=WA.ui.openPopup("welcomePopup","Oh no, you've been dropped into the servers. Find out the way!",[{label:"Start",className:"primary",callback(){a()}}]),WA.room.setTiles(e[Math.floor(Math.random()*e.length)])}).catch(o=>console.error(o));function a(){!l||(l.close(),l=null)}
