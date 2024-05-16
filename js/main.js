'use strict';

//////////////////////////////////////////////////////////

//MILESTONE 0
//DEFINIRE UN ARRAY DI OGGETTI
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },


]

//console.log({team});

//MILESTONE 1
//STAMPARE ARRAY IN CONSOLE
/*
for (let i = 0; i < team.length; i++) {

    console.log(`Il membro del team numero ${i + 1} è:`);
    
    console.log(team[i].nome);
    console.log(team[i].ruolo);
    console.log(team[i].image);

}
*/


//CORREZIONE MILESTONE 1

for (let i = 0; i < team.length; i++) {

    console.log(`Il membro del team numero ${i + 1} è:`);
    for (let key in team[i]) {

        console.log(`${key}: ${team[i][key]}`)

    }

}

//MILESTONE 2
//definire variabili
const ulList = document.getElementById('list');

for (let i = 0; i < team.length; i++) {

    //aggiungere un li per ogni oggetto per la lista presente in HTML
    const liElement = document.createElement('li');
    ulList.append(liElement);

    //creare elementi nel DOM per ogni chiave e valore
    const nomeDom = document.createElement('h2');
    nomeDom.append(team[i].nome);
    const ruoloDom = document.createElement('h5');
    ruoloDom.append(team[i].ruolo);
    //MILESTONE 3
    const imageDom = document.createElement('img');
    imageDom.src = `../img/${team[i].image}`;
    console.log(imageDom.src);
    
    //aggiungere i valori al li
    liElement.append(nomeDom);
    liElement.append(ruoloDom);
    liElement.append(imageDom);
        
}