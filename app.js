// import functions and grab DOM elements
import { generateUser, setUser } from './utils.js';
// initialize global state
const userForm = document.getElementById('user-form');


// set event listeners 
userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(userform);

    const userObj = generateUser(formData);


});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
