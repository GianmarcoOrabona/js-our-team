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
];

console.log(teamMembers);

// stampo in console le informazioni di nome, ruolo e stringa della foto
for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    console.log(`<----- Member ${i + 1} ----->`)
    for (let key in member) {
        let membersDetails = member[key];
        console.log(`${key}: ${membersDetails}`);
    };

    // Credo un elemento del DOM per mostrare una card con le info del membro
    const memberCard =
        `<div class="col-4">
            <div class="card rounded-0 border-0 shadow">
                <img src="${member.image}" class="img-fluid card-img-top rounded-0" alt="team-member">
                <div class="card-body text-center">
                    <h4 class="card-title fw-bold">${member.name}</h4>
                    <p class="card-text fs-5">${member.role}</p>
                </div>
            </div>
         </div>`;

    // Inserisco la card nel DOM
    let container = document.querySelector('.row');
    container.insertAdjacentHTML('beforeend', memberCard);
};

