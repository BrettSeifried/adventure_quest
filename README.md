# Plan Time - DAY ONE
## HTML Elements
- [x] Text input for user name
- [x] Radio buttons for user Race
- [x] Form Submit button
## Events
- [x] On form submit
    - [x] Generate a user object using the form data (generateUser)
        - [x] write TDD
        - [x] Write function - utils.js

        * User Object in lab notes.
    - [x] Store user data in localStorage (setUser)
        * Always use for localStorage
        * Not as complex as e-commerce. More like pokeDex LS.
    - [x] Redirect to the map page

## Map Page
### HTML Elements
- [ ] List of links for each quest (genertaed fromt he quest-data)
    - [ ] Link should not be clickable if the user has already compelted the quest
    - [ ]Link should contrian a URL search parameter containing the quest ID

### Events
- [ ] On page load -- a bunch of game logic that we're punting on (TBD)

## Quest Detail Page
### HTML elements
- [ ] Title
- [ ] Description
- [ ] Quest Image
- [ ] Quest Choices (radio buttons)

### Events
- [ ] On page load, get the quest ID from URL search parameters and load the quest data onto the page.
- [ ] On form submit 
    - [ ] update the user data
    - [ ] redirect to the map page