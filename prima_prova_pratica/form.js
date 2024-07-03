/*creo una variabile che mi servirà per registrare l'evento submit*/

const form = document.getElementById("modulo"); 

/*creo le variabili riferite agli input del form*/

const firstName = document.getElementById("name"); 
const surname = document.getElementById("surname");
const address = document.getElementById("address");
const cap = document.getElementById("cap");
const city = document.getElementById("city");
const country = document.getElementById("country");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");

/*creo le variabili con le varie regex*/

const regexName = /^[A-Za-z. ]{3,20}$/;
const regexAddress = /\w+(\s\w+){2,}/;
const regexPostalCode = /^[0-9]{5}$/;
const regexCity = /^\s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.=#/]*$/;
const regexCountry = /^\s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.=#/]*$/;
const regexMail = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
const regexPhone= /^(\((00|\+)39\)|(00|\+)39)?(38[890]|34[24-90]|36[680]|33[13-90]|32[890]|35[013]|37[0139]|39[23])\d{6,7}$/;

/*registro l'evento submit e creo delle variabili che "testino" il valore contenuto nelle variabili input */


form.addEventListener("submit", (e) => {

    const checkName=regexName.test(firstName.value);
    const checkSurname=regexName.test(firstName.value);
    const checkAddress=regexAddress.test(address.value);
    const checkCap=regexPostalCode.test(cap.value);
    const checkCity=regexCity.test(city.value);
    const checkCountry=regexCountry.test(country.value);
    const checkMail=regexMail.test(mail.value);
    const checkPhone=regexPhone.test(phone.value);

    e.preventDefault();

    /*All'interno dell'evento submit inserisco gli if che mi serviranno a gestire il colore e gli span di errore dei campi compilati*/
    
    if (!checkName || firstName.value.length==0) {
        document.getElementById("spanName").style.visibility="visible";
        firstName.style.borderColor="red";
    }else {
        firstName.style.borderColor="green";
        document.getElementById("spanName").style.visibility="hidden";
    }


    if (!checkSurname || surname.value.length==0) {
        document.getElementById("spanSurname").style.visibility="visible";
        surname.style.borderColor="red";
    }else {
        surname.style.borderColor="green";
        document.getElementById("spanSurname").style.visibility="hidden";
    }


    if (!checkAddress || address.value.length==0) {
        document.getElementById("spanAddress").style.visibility="visible";
        address.style.borderColor="red";
    }else {
        address.style.borderColor="green";
        document.getElementById("spanAddress").style.visibility="hidden";
    }


    if (!checkCap || cap.value.length==0) {
        document.getElementById("spanCap").style.visibility="visible";
        cap.style.borderColor="red";
    }else {
        cap.style.borderColor="green";
        document.getElementById("spanCap").style.visibility="hidden";
    }

    if (!checkCity || city.value.length==0) {
        document.getElementById("spanCity").style.visibility="visible";
        city.style.borderColor="red";
    }else {
        city.style.borderColor="green";
        document.getElementById("spanCity").style.visibility="hidden";
    }

    if (!checkCountry || country.value.length==0) {
        document.getElementById("spanCountry").style.visibility="visible";
        country.style.borderColor="red";
    }else {
        country.style.borderColor="green";
        document.getElementById("spanCountry").style.visibility="hidden";
    }

    if (!checkMail || mail.value.length==0) {
        document.getElementById("spanMail").style.visibility="visible";
        mail.style.borderColor="red";
    }else {
        mail.style.borderColor="green";
        document.getElementById("spanMail").style.visibility="hidden";
    }

    if (!checkPhone || phone.value.length==0) {
        document.getElementById("spanPhone").style.visibility="visible";
        phone.style.borderColor="red";
    }else {
        phone.style.borderColor="green";
        document.getElementById("spanPhone").style.visibility="hidden";
    }
    

})

