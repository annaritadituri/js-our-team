'use strict';

//////////////////////////////////////////////////////////

//MILESTONE 0
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

console.log({team});

//MILESTONE 1
for (let i = 0; i < team.length; i++) {

    console.log(`Il membro del team numero ${i + 1} è:`)
    
    console.log(team[i].nome);
    console.log(team[i].ruolo);
    console.log(team[i].image);

}