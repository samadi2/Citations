let generer=document.getElementById('generer');
let citation1=document.getElementById('citation1');
let affiche1=document.getElementById('affiche1');
let reinitialiser=document.getElementById('reinitialiser');
let jeudébut=['Dire bonjour ne prends que quelques secondes',"IL y a  Certaines choses que l'on perd,",'Ces paroles de fin de guerre ','Rideau après rideau',"la vie c'est comme un jeux vidéos,"];
let jeumilieu=['mais dire au revoir',"d'autre qu'on retrouve, ",'sont touchantes','la terre ouvrait son théatre',"en faisant ce que ton créateur te dit,"];
let jeufin=['prend une éternité.','ainsi va le monde.',' malgré la mauvaise nouvelles de son trépas.','pour les jeux du jour et du monde.','tu gagneras.'];

generer.addEventListener("click",jeux);

function jeux() {
    let nbcitation1=document.getElementById('nbcitation1');
    let nbr=/^\d+$/;
    let nbrs=/^[1-5]$/; 
    if (nbcitation1.value.trim()=="") {
        let myError=document.getElementById('error1');
        myError.innerHTML= "choisir le nombre de citations."
        myError.style.color='red';
        jeux.preventDefault();
    } else if (nbr.test(nbcitation1.value)==false) {
        let myError=document.getElementById('error1');
        myError.innerHTML= "Mettre des chiffres uniquements."
        myError.style.color='red';
        jeux.preventDefault();        
    } else if (nbrs.test(nbcitation1.value)== false) {
        let myError=document.getElementById('error1');
        myError.innerHTML= "choisir les nombre entre 1 et 5."
        myError.style.color='red';
        jeux.preventDefault();
    } else {
        let myError=document.getElementById('error1');
        while (myError.firstChild) {
            myError.removeChild(myError.firstChild)
        }
    }
    affiche1.innerHTML="";
    for (i=0;i<nbcitation1.value;i++){
        let nbjeudeb=Math.floor(Math.random()*(jeudébut.length));
        let nbjeumil=Math.floor(Math.random()*(jeumilieu.length));
        let nbjeufin=Math.floor(Math.random()*(jeufin.length));
        let citation1=document.createElement('p');
        citation1.textContent= jeudébut[nbjeudeb] + " "+ jeumilieu[nbjeumil]+ " "+jeufin[nbjeufin];
        affiche1.appendChild(citation1);


    }
    document.getElementById('titre1').style.color="black";

    
}

let generer2=document.getElementById('generer2');
let citation2=document.getElementById('citation2')
let sportdébut=['Le sport ne forge','Le sport ','Lève toi avec détermination','Ne limite pas ','Je ne perds jamais,'];
let sportmilieu=['pas ','nous','couche toi','tes défis','soit je gagne,'];
let sportfin=['le caractère.','relève.','avec satisfaction.','défie tes limites.',"soit j'apprends"];

generer2.addEventListener("click",sport);

function sport() {
    let nbcitation2=document.getElementById('nbcitation2');
    let nbr=/^\d+$/;
    let nbrs=/^[1-5]$/; 
    if (nbcitation2.value.trim()=="") {
        let myError=document.getElementById('error2');
        myError.innerHTML= "choisir le nombre de citations."
        myError.style.color='red';
        sport.preventDefault();
    } else if (nbr.test(nbcitation2.value)==false) {
        let myError=document.getElementById('error2');
        myError.innerHTML= "Mettre des chiffres uniquements."
        myError.style.color='red';
        sport.preventDefault();        
    } else if (nbrs.test(nbcitation2.value)== false) {
        let myError=document.getElementById('error2');
        myError.innerHTML= "choisir les nombre entre 1 et 5."
        myError.style.color='red';
        sport.preventDefault();
    } else {
        let myError=document.getElementById('error2');
        while (myError.firstChild) {
            myError.removeChild(myError.firstChild);
        }
    }
    affiche2.innerHTML="";
    for (i=0;i<nbcitation2.value;i++){
        let nbsportdeb=Math.floor(Math.random()*(sportdébut.length));
        let nbsportmil=Math.floor(Math.random()*(sportmilieu.length));
        let nbsportfin=Math.floor(Math.random()*(sportfin.length));
        let citation2=document.createElement('p');
        citation2.textContent= sportdébut[nbsportdeb] + " "+ sportmilieu[nbsportmil]+ " "+sportfin[nbsportfin];
        affiche2.appendChild(citation2);
        
        
    }
    document.getElementById('titre2') .style.color="black";
    
}

document.getElementById('citation1').style.border="solid 1rem #f1c232";
document.getElementById('citation1').style.borderRadius="8px";
document.getElementById('citation1').style.background="linear-gradient(#FFFF00,#FFA500)";

document.getElementById('citation2').style.border="solid 1rem #f1c232";
document.getElementById('citation2').style.borderRadius="8px";
document.getElementById('citation2').style.background="linear-gradient(#FFA500,green)";

