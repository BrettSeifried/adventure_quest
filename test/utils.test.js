import { generateUser, setUser, getUser, scoreQuest, hasCompletedAllQuests } from '../utils.js';

const test = QUnit.test;

test('generateUser should return a userObject', (e) =>{
    const expected = {
        completed: {},
        gold: 0,
        hp: 35,
        name: 'Brettford',
        class: 'fighter',
    };
    
    const formData = new FormData();
    formData.set('name', 'Brettford');
    formData.set('class', 'fighter');
        
    const actual = generateUser(formData);
        
    e.deepEqual(actual, expected);
});

test('setUser creates an object', (e)=>{
    localStorage.removeItem('USER');
    const userObject = {
        completed: {},
        gold: 0,
        hp: 35,
        name: 'Brettford',
        class: 'fighter',
    };

    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));

    e.deepEqual(actual, userObject);
});

test('getUser should return player info to localStorage', (e)=>{
    //arange
    const userObject = {
        completed: {},
        gold: 0,
        hp: 35,
        name: 'Brettford',
        race: 'Fighter',
    };

    setUser(userObject);
    //act
    const actual = getUser();
    //assert
    e.deepEqual(actual, userObject);
});

test('scoreQuest should update gold, hp and compelted on the userObject', (e)=>{
    const userObject = {
        completed: {},
        gold: 0,
        hp: 35,
        name: 'Brettford',
        race: 'Fighter',
    };
    const choiceObject = {
        id: 'run',
        description: 'First Choice',
        result: `
            Story of first choice
        `,
        hp: -35,
        gold: 15
    };
    const questId = 'seattle';

    //act

    scoreQuest(choiceObject, questId, userObject);
    
    //asert
    e.equal(userObject.hp, 0);
    e.equal(userObject.gold, 15);
    e.equal(userObject.completed[questId], true);
});

test('hasCompletedAllQuests returns true if the user has compelted all quests', (e)=>{
    const userObject = {
        completed: { seattle: true, yakima: true, spokane: true },
    };

    const actual = hasCompletedAllQuests(userObject);
    e.equal(actual, true);
});

test('hasCompletedAllQuests returns false if the user has NOT completed all quests.', (e)=>{
    const userObject = {
        completed: { seattle: true, yakima: true },
    };
    const actual = hasCompletedAllQuests(userObject);
    e.equal(actual, false);
});