import { generateUser, setUser } from '../utils.js';

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