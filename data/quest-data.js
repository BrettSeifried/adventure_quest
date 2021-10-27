const seattle = {
    id: 'seattle',
    title: 'The Needle that pierces space',
    map: {
        top: '58%',
        left: '30%',
    },
    image: 'Seattle.jpg',
    description: `
        You enter Seattle
    `,
    choices: [{
        id: 'negotiate',
        description: 'First Choice',
        result: `
                First Result
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'second Choice',
        result: `
                second Result
        `,
        hp: -30,
        gold: 50  
    }, {
        id: 'fight',
        description: 'third Choice',
        result: `
                third Result
        `,
        hp: -50,
        gold: 0  
    }]
};

const yakima = {
    id: 'yakima',
    title: 'Yakima Training',
    map: {
        top: '78%',
        left: '48%'
    },
    image: 'Yakima.webp',
    description: `
        A Yakima Story
    `,
    choices: [{
        id: 'run',
        description: 'First Choice',
        result: `
            Story of first choice
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'second Choice',
        result: `
        Story of second choice
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'third Choice',
        result: `
        Story of third choice
        `,
        hp: 0,
        gold: 90
    }]
};

const spokane = {
    id: 'spokane',
    title: 'Spokane river monsters',
    map: {
        top: '55%',
        left: '62%'
    },
    image: 'spokane.jpg',
    description: `
        Story of Spokane
    `,
    choices: [{
        id: 'wooden',
        description: 'First Choice',
        result: 'First Choice Resutls',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'Second Choice',
        result: 'Second Choice results',
        hp: -50,
        gold: 0
    }, {
        id: 'jewel',
        description: 'Third Choice',
        result: 'Third Choice results',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    seattle,
    yakima,
    spokane,
];

export default quests;