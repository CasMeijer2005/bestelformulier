function verstuur(){
    var aanhef = document.getElementById("aflever_aanhef");
    var voornaam = document.getElementById("aflever_voornaam");   
    var achternaam = document.getElementById("aflever_achternaam");
    var straat = document.getElementById("aflever_straat");
    var huisnummer = document.getElementById("aflever_huisnummer");
    var bedrijf = document.getElementById("aflever_bedrijf");
    var postcode = document.getElementById("aflever_postcode");
    var plaats = document.getElementById("aflever_woonplaats");
    var land = document.getElementById("aflever_land");
    var emailadres = document.getElementById("email");
    var telefoon = document.getElementById("telefoon");
    var algvw = document.getElementById("algvw");
    
    var returnWaarde= true;

    //var ander_facatuureadres = document.getElementById("facatuuradres_ja").checked;

    document.getElementById("form-error").innerHTML = "";

    if(aanhef.value == ""){
        document.getElementById("aflever_aanhef").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Aanhef is niet ingevuld";
        returnWaarde = false;
    } else {
        document.getElementById("aflever_aanhef").style.border = "1px solid lichtgrey";
    }

    if(voornaam.value == ""){
        document.getElementById("aflever_voornaam").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Voornaam is niet ingevuld";
        returnWaarde = false;
    } else {
        document.getElementById("aflever_voornaam").style.border = "1px solid lichtgrey";
    }

    if(achternaam.value == ""){
        document.getElementById("aflever_achternaam").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Aachternaam is niet ingevuld"
        returnWaarde = false;
    } else {
        document.getElementById("aflever_achternaam").style.border = "1px solid lichtgrey";
    }

    if(straat.value == ""){
         document.getElementById("aflever_straat").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Straatnaam is niet ingevuld";
        returnWaarde = false;
    } else {
        document.getElementById("aflever_straat").style.border = "1px solid lichtgrey";
    }

    if(huisnummer.value == ""){
        document.getElementById("aflever_huisnummer").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Huisnummer is niet ingevuld";
        returnWaarde = false;
    } else {
        document.getElementById("aflever_huisnummer").style.border = "1px solid lichtgrey";
    }

    if(bedrijf.value == ""){
        document.getElementById("aflever_bedrijf").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Bedrijf is niet ingevuld";
        returnWaarde = false;
    } else {
        document.getElementById("aflever_bedrijf").style.border = "1px solid lichtgrey";
    }

    if(postcode.value == ""){
        document.getElementById("aflever_postcode").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Postcode is niet ingevuld";
        returnWaarde = false;
    } else {
        document.getElementById("aflever_postcode").style.border = "1px solid lichtgrey";
    }

    if(plaats.value == ""){
        document.getElementById("aflever_woonplaats").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Plaats is niet ingevuld"
        returnWaarde = false;  
    } else {
        document.getElementById("aflever_woonplaats").style.border = "1px solid lichtgrey";
    }

    if(land.value == ""){
        document.getElementById("aflever_land").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Land is niet ingevuld"
        returnWaarde = false;  
    } else {
        document.getElementById("aflever_land").style.border = "1px solid lichtgrey";
    }

    if(emailadres.value == ""){
        document.getElementById("email").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Email is niet ingevuld"
        returnWaarde = false;
    } else {
        document.getElementById("email").style.border = "1px solid lichtgrey";
    }

    if(telefoon.value == ""){
        document.getElementById("telefoon").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Telefoonnummer is niet ingevuld"
        returnWaarde = false;
    } else {
        document.getElementById("telefoon").style.border = "1px solid lichtgrey";
    }

    if(algvw.checked){
        document.getElementById("algvw").style.border = "1px solid lichtgrey";
    } else {
        document.getElementById("algvw").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Ga akkoord met de algemene voorwaarde";
        returnWaarde = false;
    }
    var radio = document.getElementById("factuuradres_ja").checked;
    if (!radio){
    document.getElementById("aflever_aanhef").value = aanhef;
    document.getElementById("aflever_voornaam").value = voornaam;
    document.getElementById("aflever_achternaam").value = achternaam;
    document.getElementById("aflever_straat").value = straat;
    document.getElementById("aflever_huisnummer").value = huisnummer;
    document.getElementById("aflever_bedrijf").value = bedrijf;
    document.getElementById("aflever_postcode").value = postcode;
    document.getElementById("aflever_woonplaats").value = plaats;
    document.getElementById("aflever_land").value = land;
    }
    
    var factuurVoornaam = document.getElementById("factuur_voornaam").value;
    var factuurachternaam = document.getElementById("factuur_achternaam").value;
    var factuurstraatnaam = document.getElementById("factuur_straat").value;
    var factuurhuisnummer = document.getElementById("factuur_huisnummer").value;
    var factuurpostcode = document.getElementById("factuur_postcode").value;
    var factuurwoonplaats = document.getElementById("factuur_woonplaats").value;
    var factuurland = document.getElementById("factuur_land").value;

    if (factuurVoornaam == "") {  
        document.getElementById("factuur_voornaam").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Facatuur voornaam niet ingevuld";
        returnWaarde = false;
    } else {
         returnWaarde = true;
    }

    if (factuurachternaam == "") {  
        document.getElementById("factuur_achternaam").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Facatuur achternaam niet ingevuld";
        returnWaarde = false;
    } else {
         returnWaarde = true;
    }

    if (factuurstraatnaam == "") {  
        document.getElementById("factuur_straat").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Facatuur straat niet ingevuld";
        returnWaarde = false;
    } else {
         returnWaarde = true;
    }

    if (factuurhuisnummer == "") {  
        document.getElementById("factuur_huisnummer").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Facatuur huisnummer niet ingevuld";
        returnWaarde = false;
    } else {
         returnWaarde = true;
    }

    if (factuurpostcode == "") {  
        document.getElementById("factuur_postcode").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Facatuur postcode niet ingevuld";
        returnWaarde = false;
    } else {
         returnWaarde = true;
    }

    if (factuurwoonplaats == "") {  
        document.getElementById("factuur_woonplaats").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Facatuur woonplaats niet ingevuld";
        returnWaarde = false;
    } else {
         returnWaarde = true;
    }

    if (factuurland == "") {  
        document.getElementById("factuur_land").style.border= "1px solid red";
        document.getElementById("form-error").innerHTML += "<br>Facatuur land niet ingevuld";
        returnWaarde = false;
    } else {
         returnWaarde = true;
    }


    // if(returnWaarde === false){
    //     document.getElementById("form_error").style.display = "block";
    // } else {
    //     document.getElementById("form_error").style.dysplay = "none";
    // }
    
    return returnWaarde;
}



    
// function kopieer_gegevens(){
//     var facatuur_aanhef = document.getElementById("facatuur_aanhef");


//     if(facatuur_aanhef.value == ""){
//         document.getElementById("facatuur_aanhef").style.border= "1px solid red"
//         document.getElementById("form-error").innerHTML += "<br>Vul facatuur aanhef in";
//         returnWaarde = false 
//     } else {
//         document.getElementById("facatuur_aanhef").style.border = "1px solid lichtgray"
//     }
// }