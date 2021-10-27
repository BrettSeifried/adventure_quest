import quests from '../data/quest-data.js';
import { getUser, hasCompletedAllQuests } from '../utils.js';
import { loadProfile } from '../data/profile.js';

loadProfile();

const mapLinks = document.getElementById('map-links');

const player = getUser();

if (player.hp <= 0 || hasCompletedAllQuests(player)){
    window.location.replace('../endgame');
}


function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('mapLinks');
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;

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