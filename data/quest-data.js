const seattle = {
    id: 'seattle',
    title: 'The Needle that pierces space',
    map: {
        top: '58%',
        left: '30%',
    },
    image: 'Seattle.jpg',
    description: `
    You enter Seattle, center of prosperity and hope of the World of Washington. With its Iconic needle that pierces through the heavens and into space… To infinity and beyond. You are greeted by nomads and locals alike. On your third day in the Town that Pierces space, you are warned of the dreaded 8-pack dragon. A Dragon who feeds on all the protein, and has won Mr. Dragon-Universe 10 years running. And has held the title of World’s fittest Dragon 3 years running.
    `,
    choices: [{
        id: 'negotiate',
        description: 'You keep your distance, not attempting to fight he God of a Dragon in front of you',
        result: `
        The nomads see you walk away, they know you could have been crucial to turn the tide of battle, preventing the Needle that pierces Space from being destroyed, they reward you with 35 gold.
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'You move in cautiously and support the locals, not getting too involved.',
        result: `
        In the Chaos, you take 30 damage, but you live to fight another day. You are rewarded by the locals.
        `,
        hp: -30,
        gold: 50  
    }, {
        id: 'fight',
        description: 'You pull on your boots, you grab your weapon, AND, YOU, FIGHT.',
        result: `
        Well that wasn’t the best choice. He’s the world’s fittest Dragon. You lose 50 HP.
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
    You Decide to get some training in at the dunes of the World of Washington, the self-titled Palm Springs of Washington. Your instructor is a haggard Gerudo with many names. The Prince of Darkness, King of Thieves, King of Evil, and many more.  You can tell he flows with power, unnatural power. As you see him pass, you get a sense that he may not be a good person, a demon set on power and destruction. Behind him you see the main training barracks where most who come here train to become desert Warriors. In this moment, you know you must make a choice.
    `,
    choices: [{
        id: 'run',
        description: 'Avoid The Demon King and you make your way to the training center proper.',
        result: `
        You receive Rough and Hard Training. You pay in sweat, blood, and tears. While you train you sustain an injury and lose 25hp. You Come out stronger, but with a lingering injury. The instructors compensate you 15 gold for your injury and push you out the door.
        `,
        hp: -25,
        gold: 15
    }, {
        id: 'fight',
        description: 'You know how to train, you venture out into the harsh desert to grow through your own trials and tribulations ',
        result: `
        You made a BIG overestimation of the land. It is harsh and unforgiving. You are found on the brink of dehydration and starvation by the Demon King. He returns you to camp and has no time for stubbornness. You lose 45 HP.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'You dig deep for every ounce of courage you possess. You make eye contact with the Demon King, and offer up your weapon. ',
        result: `
        The Great Ganandorf gestures for you to follow him. Not only do you receive the best training in the World of Washington, he grants you a gift of 90 gold to purchase a new weapon and armor for your adventure. 
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
    Spokane, the land of rivers and dreams. Where fishers fight life and death for the most delicious fish in the World of Washington, the Maw-Rays. The best Sushi and most nutritional fish travel in schools, and are the size of an entire fishing boat. Teams of Warriors and Wizards battle these fish. High Risk vs High Reward. One of these boats approaches you and see that you are battle hardened. You join them and come upon your first Maw-Rays… How do you assist?
    `,
    choices: [{
        id: 'wooden',
        description: 'You put your back into it, and propel yourself to the front line.',
        result: 'Your bravado inspires your crew, and you quickly dispatch the Maw-Ray. Not taking any damage and bagging 40 Gold.',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'You choose to play a support role, helping your crew from the back line.',
        result: 'Your crew is overwhelmed without you. You realize too late you have to help. You flee to a raft and swim away. Taking 50 damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jewel',
        description: 'You follow your crew into battle, fighting alongside your crew',
        result: 'Your crew takes some casualties, your ship sustains major damage, but you dispatch the Maw-Ray. Due to the damage and casualties, the ship’s captain cannot pay you, but commands his cleric to heal you for 35hp before you leave.',
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