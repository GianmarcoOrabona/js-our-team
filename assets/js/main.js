/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite nella tabella
*/

// Array di oggetti con i dati dei membri del team
let teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "./assets/img/wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: './assets/img/angela-caroll-chief-editor.jpg'
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: './assets/img/walter-gordon-office-manager.jpg'
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: './assets/img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: './assets/img/scott-estrada-developer.jpg'
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: './assets/img/barbara-ramos-graphic-designer.jpg'
    }
]

console.log(teamMembers);

/*
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto 
*/

// stampo in console le informazioni di nome, ruolo e stringa della foto
for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    console.log(`<----- Member ${i + 1} ----->`)
    for (let key in member) {
        let membersDetails = member[key];
        console.log(`${key}: ${membersDetails}`);
    }
}

/* 
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/
