function verstuur(){
    // var aanhef = docuemnt.getElementById("aflever_aanhef").value;
    var voornaam = document.getElementById("aflever_voornaam").value;   
    var achternaam = document.getElementById("aflever_achternaam").value;
    var straat = document.getElementById("aflever_straat").value;
    var huisnummer = document.getElementById("aflever_huisnummer").value;
    var bedrijf = document.getElementById("aflever_bedrijf").value;
    var postcode = document.getElementById("aflever_postcode").value;
    var plaats = document.getElementById("aflever_woonplaats").value;
    // var land = document.getElementById("aflever_land").value;
    var emailadres = document.getElementById("email").value;
    var telefoon = document.getElementById("telefoon").value;
    var algvw = document.getElementById("algvw")

    var facatuureadres 
    
    var returnWaarde= false;

    document.getElementById("form-error").innerHTML = ""

    // if(aanhef != "Aanhef"){
    //     returnWaarde = true;
    // } else {
    //     document.getElementById("aflever_aanhef").style.border= "1px solid red";
    //     document.getElementById("form-error").innerHTML += "<br>Aanhef is niet ingevuld"
    //     returnwaarde = false;
    // }

    if(voornaam != ""){
        returnWaarde = true;
    } else {
        document.getElementById("aflever_voornaam").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Voornaam is niet ingevuld"
        returnwaarde = false;
    }

    if(achternaam != ""){
        returnWaarde = true;
    } else {
        document.getElementById("aflever_achternaam").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Aachternaam is niet ingevuld"
        returnwaarde = false;
    }

    if(straat != ""){
        returnWaarde = true;
    } else {
        document.getElementById("aflever_straat").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Straatnaam is niet ingevuld"
        returnwaarde = false;
    }

    if(huisnummer != ""){
        returnWaarde = true;
    } else {
        document.getElementById("aflever_huisnummer").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Huisnummer is niet ingevuld"
        returnwaarde = false;
    }

    if(bedrijf != ""){
        returnWaarde = true;
    } else {
        document.getElementById("aflever_bedrijf").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Bedrijf is niet ingevuld"
        returnwaarde = false;
    }

    if(postcode != ""){
        returnWaarde = true;
    } else {
        document.getElementById("aflever_postcode").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Postcode is niet ingevuld"
        returnwaarde = false;
    }

    if(plaats != ""){
        returnWaarde = true;
    } else {
        document.getElementById("aflever_woonplaats").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Plaats is niet ingevuld"
        returnwaarde = false;  
    }

    // if(land != ""){
    //     returnWaarde = true;
    // } else {
    //     document.getElementById("aflever_land").style.border= "1px solid red";
    //     document.getElementById("form-error").innerHTML += "<br>Land is niet ingevuld"
    //     returnwaarde = false;  
    // }

    if(emailadres != ""){
        returnWaarde = true;
    } else {
        document.getElementById("email").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Email is niet ingevuld"
        returnwaarde = false;
    }

    if(telefoon != ""){
        returnWaarde = true;
    } else {
        document.getElementById("telefoon").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Telefoonnummer is niet ingevuld"
        returnwaarde = false;
    }

    if(algvw !=""){
        returnWaarde = true;
        document.getElementById("algvw").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Ga accord met de algemene voorwaarde"
    }



    if(facatuureadres ="ja"){
        
    }

    
return returnwaarde;
}