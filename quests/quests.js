import quests from '../data/quest-data.js';
import { findById, setUser, getUser, scoreQuest } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const questData = findById(quests, params.get('id'));


// update HTML elements with quest data
const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;
const description = document.getElementById('quest-description');
description.textContent = questData.description;


const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices){
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;

    label.append(input, span);
    questChoices.append(label);
}

const button = document.createElement('button');
button.textContent = 'Make your choice';
questChoices.append(button);

questChoices.addEventListener('submit', (expect)=>{
    expect.preventDefault();
// get selected choice from arrays (findById)
    const choiceRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findById(questData.choices, choiceRadio.value);
    // get user data from local storage (getUSer)
    const user = getUser();
    // update the user (scoreQuest(choice, questID, user))
    //      update the gold, hp, completed
    scoreQuest(choice, questData.id, user);
    // reset to localStorage (setUser)
    setUser(user);

// display the result
// display a link to og back to the map.
    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');

    const questResults = document.createElement('results');

    const resultPara = document.createElement('p');
    resultPara.textContent = choice.result;

    const backLink = document.createElement('a');
    backLink.href = '../map';
    backLink.textContent = 'Back to your Journey';

    questResults.append(resultPara, backLink);

    questResults.classList.remove('hidden');

});