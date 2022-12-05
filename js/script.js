

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


const contenitoreOld = document.getElementById("outputOld");
const bottoneAggiungi = document.querySelector("a.btn-primary");
const nome = document.getElementById("nome");
const ruolo = document.getElementById("ruolo");
const immagineAggiunta = document.getElementById("immagine");




for(let i = 0; i < membriTeam.length; i++){
    
    
    const p = document.createElement("p");
    const sfondo = document.createElement("div");
    const aCapo = document.createElement("br");

    

    p.classList.add("p-3")
    
    contenitoreOld.append(p);
    
    
    sfondo.style.width = "350px";
    sfondo.style.height = "350px";
    sfondo.style.backgroundImage = `url(./img/${membriTeam[i].img} )`;
    
    p.append(sfondo);
    
    
    p.append(membriTeam[i].name);
    p.append(aCapo);
    p.append(membriTeam[i].role);
    

    



}

const contenitoreNew = document.getElementById("outputNew")
const membriTeamAggiunti = [];

bottoneAggiungi.addEventListener("click", function(){

    contenitoreNew.innerHTML = "";

    
    membriTeamAggiunti.push({
        name : nome.value,
        role : ruolo.value,
        img  : immagineAggiunta.value,  
    })

    for(let i = 0; i < membriTeamAggiunti.length; i++){

        const p = document.createElement("p");
        const sfondo = document.createElement("div");
        const aCapo = document.createElement("br");


        p.classList.add("p-3")


        contenitoreNew.append(p);

        sfondo.style.width = "350px";
        sfondo.style.height = "350px";
        sfondo.style.backgroundImage = `url(${membriTeamAggiunti[i].img})`;
        sfondo.style.backgroundPosition = "center";
        sfondo.style.backgroundSize = "cover";


        p.append(sfondo);

        p.append(membriTeamAggiunti[i].name);
        p.append(aCapo);
        p.append(membriTeamAggiunti[i].role);


    }



   

   


});