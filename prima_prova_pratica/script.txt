
/*Registro l'evento del click sulle immagini del carosello, creando un array di immagini e sostituendo la src dell'immagine principale con quella dell'immagine
sulla quale ho cliccato*/ 

let arrayImg = document.querySelectorAll(".carousel img, video");

for (let i=0; i<arrayImg.length; i++) {
    arrayImg[i].addEventListener("click", () => {
        let immaginePrincipale = document.querySelector(".main_img img");
        immaginePrincipale.src=arrayImg[i].src; 
    })
}

/*creo i button delle taglie con un ciclo for*/

let quadratiTaglie = document.querySelector(".grid_taglie");

for (let i=0; i<12; i++) {
    quadratiTaglie.innerHTML+=`<button>EU ${37+i}</button>`;
    
}

/*Creo un array di buttons per selezionare la taglia.
Uso classlist.add e .remove per gestire il colore di sfondo al click*/

let arrayTaglie = document.querySelectorAll(".grid_taglie button");

let tagliaSelezionata;

for (let i=0; i<arrayTaglie.length; i++) {
    arrayTaglie[i].addEventListener("click", () => {
        arrayTaglie.forEach(button => {
            button.style.backgroundColor = ""; 
        });
        
        arrayTaglie[i].classList.add("selected");
        tagliaSelezionata=arrayTaglie[i].textContent;
        arrayTaglie[i].style.backgroundColor = "grey";
        
        
    })
}

/*registro il click sull'aggiunta al carrello e mostro il popup con visible se l'utente ha selezionato una taglia, 
mentre se non la seleziona mostro un messaggio di errore*/

let arrayButton = Array.from(arrayTaglie);
console.log(arrayButton)

document.getElementById("buttonCarrello").addEventListener("click", () => { 
console.log(tagliaSelezionata);
if (tagliaSelezionata) {
    document.querySelector(".popupCarrello").style.visibility="visible";
    document.getElementById("errorTaglia").style.visibility="hidden";
    document.querySelector(".grid_taglie").style.border="none";
    document.querySelector(".selectSize").style.color="";
} else {
    document.getElementById("errorTaglia").style.visibility="visible";
    document.querySelector(".grid_taglie").style.border="1px solid red";
    document.querySelector(".selectSize").style.color="red";
}
})

document.getElementById("closeButton").addEventListener("click", () => {    /*quando clicco sulla x si chiude il popup*/
        document.querySelector(".popupCarrello").style.visibility="hidden";
});

/*mostra il carrello quando clicco sul button vai al carrello*/

document.getElementById("cButton1").addEventListener("click", () => {
    window.location.href = 'cart.html';
});