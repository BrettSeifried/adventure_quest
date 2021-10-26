import quests from '../data/quest-data.js';
console.log(quests);

const mapLinks = document.getElementById('map-links');
console.log(mapLinks);

for (let quest of quests){
    const a = document.createElement('a');
    a.href = `../quests/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}