import { loadProfile } from '../data/profile.js';

loadProfile();

const restart = document.getElementById('reset');

restart.addEventListener('click', ()=>{
    localStorage.clear();
    
    window.location.replace('../index.html');
});