
/*creo un array con i p contenuti nella classe ds3 e li sommo
poi li aggiungo al p del subtotale, il quale deve essere uguale anche al totale dal momento che la spedizione è gratis*/
let arrayPrezzi = [];
arrayPrezzi.push(document.getElementById("p1").textContent);
arrayPrezzi.push( document.getElementById("p2").textContent);

let total;

function updateTotal() { /*funzione per sommare elementi dell'array prezzi*/
    total=0;
    for(let i = 0; i < arrayPrezzi.length; i++) {
    arrayPrezzi[i] = parseFloat(arrayPrezzi[i]);
    total+=arrayPrezzi[i];
}

    document.getElementById("sub").innerHTML=total;
    document.getElementById("tot").innerHTML=total;

}

updateTotal();

document.getElementById("b1").addEventListener("click", () => { /*se elimino il primo div togli il prezzo e ricalcola il totale*/ 
    document.getElementById("div1Scarpa").remove();
    arrayPrezzi.shift();
    console.log(arrayPrezzi);
    updateTotal();
})

document.getElementById("b2").addEventListener("click", () => { /*se elimino il secondo div togli il prezzo e ricalcola il totale*/ 
    document.getElementById("div2Scarpa").remove();
    arrayPrezzi.pop();
    console.log(arrayPrezzi);
    updateTotal();
})

/*gestione form pagamento*/

document.querySelector(".buttonPagamento").addEventListener("click", () => {
    window.location.href = 'consegna.html';
});

