

/*


    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
    Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


    Wayne Barnett  Founder & CEO            wayne-barnett-founder-ceo.jpg
    Angela Caroll  Chief Editor             angela-caroll-chief-editor.jpg
    Walter Gordon  Office Manager           walter-gordon-office-manager.jpg
    Angela Lopez   Social Media Manager     angela-lopez-social-media-manager.jpg
    Scott Estrada  Developer                scott-estrada-developer.jpg
    Barbara Ramos  Graphic Designer         barbara-ramos-graphic-designer.jpg

    Creare l’array di oggetti con le informazioni fornite.
    Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    Stampare le stesse informazioni su DOM sottoforma di stringhe


*/


const membriTeam =[

    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },

    {
        name: "Angela Lopez",
        role: "Social Media Menager",
        img: "angela-lopez-social-media-manager.jpg",
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },

    {
        name: "Barbare Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    }



];


const contenitore = document.querySelector("div.col-12");

for(let i = 0; i < membriTeam.length; i++){


    console.log(membriTeam[i]);

    const p = document.createElement("p");

    contenitore.append(p);

    p.append(membriTeam[i].name);
    p.append(" : ");
    p.append(membriTeam[i].role);
    p.append(" : ");
    p.append(membriTeam[i].img);



}