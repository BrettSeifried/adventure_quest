import quests from '../data/quest-data.js';
import { getUser, hasCompletedAllQuests } from '../utils.js';

const mapLinks = document.getElementById('map-links');

const player = getUser();

if (player.hp <= 0 || hasCompletedAllQuests(player)){
    window.location.replace('../gameover');
}


function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;

    mapLinks.appendChild(span);
}

//loop for quest
for (let quest of quests){
    if (player.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

// for (let quest of quests){
//     const a = document.createElement('a');
//     a.href = `../quests/?id=${quest.id}`;
//     a.textContent = quest.title;

//     mapLinks.appendChild(a);
// }