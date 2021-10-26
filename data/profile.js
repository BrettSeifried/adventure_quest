import { getUser } from '../utils.js';

function isDead(player){
    return player.hp <= 0;
}

export function loadProfile() {
    // name
    const name = document.getElementById('name');
    // avatar
    const avatar = document.getElementById('avatar');
    //hp
    const hp = document.getElementById('hp');
    // gold
    const gold = document.getElementById('gold');
    
    //get user
    const user = getUser();

    name.textContent = user.name;
    avatar.src = '../assets/' + user.class + '.png';
    gold.textContent = user.gold;

    if (isDead(user)) {
        hp.textContent = 'You have ran out of HP';
    } else {
        hp.textContent = user.hp;
    }
    
}
