/*creo una variabile che mi servirà per registrare l'evento submit*/

const formPagamento = document.getElementById("formPagamento");

/*creo le variabili riferite al modulo pagamento*/

const cardNumber = document.getElementById("numCarta");
const yearMonth = document.getElementById("meseAnno");
const cvvCard = document.getElementById("cvvcode");

/*creo le variabili con le varie regex*/

const regexCardNum = /(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)/;
const regexYear= /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
const regexCardCode = /^[0-9]{3,4}$/;

/*registro l'evento submit e creo delle variabili che "testino" il valore contenuto nelle variabili input */

formPagamento.addEventListener("submit", (e) => {

    const checkNumberC=regexCardNum.test(cardNumber.value);
    const checkYear=regexYear.test(yearMonth.value);
    const checkCode=regexCardCode.test(cvvCard.value);

    e.preventDefault();

    /*All'interno dell'evento submit inserisco gli if che mi serviranno a gestire il colore rosso e verde per la validazione dei campi compilati*/

    if (!checkNumberC || cardNumber.value.length==0) {
        cardNumber.style.borderColor="red";
    }else {
        cardNumber.style.borderColor="green";
    }

    if (!checkYear || yearMonth.value.length==0) {
        yearMonth.style.borderColor="red";
    }else {
        yearMonth.style.borderColor="green";
    }

    if (!checkCode || cvvCard.value.length==0) {
        cvvCard.style.borderColor="red";
    }else {
        cvvCard.style.borderColor="green";
    }

})

