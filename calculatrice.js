

function rab(){
    document.getElementById('zone_affichage').value = "";
   
}

function calcul(){

    let chamSaisir = document.getElementById('zone_affichage').value;
    let resultat = eval(chamSaisir);
    document.getElementById('zone_affichage').value = "";
    document.getElementById("zone_affichage").value = resultat;
    try{
        eval();
    }
    catch (e) {
        alert("erreur");
    }
    return resultat;
}

function affiche(elmt){
    document.getElementById('zone_affichage').value = document.getElementById('zone_affichage').value + elmt.value ;
    
}

function init(){
    let donnees = document.getElementsByClassName("bouton_simple");
    for (let i =0 ; i< donnees.length ; i++ ){
        donnees[i].onclick = function() {
            affiche(this);
        }
    }
}

function plusmoins(){
    
    let a = zone_affichage; 
    let b = a.value.charAt(0);
    a.value = a.value * (-1);
}

function range_memory(){
    let memory = document.getElementById('zone_affichage').value;
    console.log(memory);
    return memory;
}

function affiche_memory(){
    let a = range_memory();
    if (a !== "undefined"){
        let b = document.getElementById('zone_affichage').value;
        let resultat = a + b ;
        document.getElementById('zone_affichage').value = resultat;
    }
   
}

function raz_memory(){
    delete range_memory.memory == "undifine";
    console.log(range_memory().memory);
    
}

let edition = false; 


function mode_edition(){
    edition = true; 
    document.getElementById("E").setAttribute("onclick", "mode_calcul()");
    document.getElementById("E").style.color = "red";
    

    let bouton_libre = document.getElementsByClassName("bouton_libre");
    for (let i=0 ; i<bouton_libre.length ; i++ ){

        bouton_libre[i].removeAttribute("onclick");
        bouton_libre[i].setAttribute("ondblclick","edit(this)");
    }
    
}

function mode_calcul(){
    edition = false; 
    document.getElementById("E").setAttribute("onclick", "mode_edition()");
    document.getElementById("E").style.color = "black";
    
    let bouton_libre = document.getElementsByClassName("bouton_libre");
    for (let i=0 ; i<bouton_libre.length ; i++ ){
        bouton_libre[i].removeAttribute("ondblclick");
        document.getElementById("zone_affichage").value = bouton_libre[i].value;
    
    }
}


function edit(elt){

    document.getElementById("elt").type="text"; 
    /*document.getElementById('elt').ondblclick = function(){
        fix();
    };*/
    
}

function fix(elt){
    if(elt.value === ""){ elt.setAttribute("value", ""); }
    document.getElementById("elt").type="button"; 
    document.getElementById('elt').ondblclick = function(){
        edit();
    };
}

