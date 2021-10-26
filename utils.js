// const user = { 
//     completed: {
//         dragon: true, 
//         treasure: true,
//         },
//     gold: 130,
//     hp: 35,
//     name: "dani",
//     race: "cleric",
// }

export function generateUser(formData){
    return {
        completed: {},
        gold: 0,
        hp: 35,
        name: formData.get('name'),
        class: formData.get('class'),
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}