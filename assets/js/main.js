/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite nella tabella
*/

// Array di oggetti con i dati dei membri del team
let teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]

/*
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto 
*/

// Uso una funzione per stampare l'array di oggetti
printArrayMembers(teamMembers)

/* ---------------- FUNCTIONS ---------------- */
// Funzione che permette di stampare il singolo oggetto in console
function printObject(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}

// Funzione che permette di stampare un array di oggetti
function printArrayMembers(arrayObjects) {
    for (let i = 0; i < arrayObjects.length; i++) {

        let member = arrayObjects[i];

        console.log("Team Member n° " + (i + 1) + " :");
        printObject(member);
    }
}