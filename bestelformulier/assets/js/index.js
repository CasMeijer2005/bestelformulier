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
        document.getElementById("form-error").innerHTML += "<br>Ga accord met de algemene voorwaarde";
        returnWaarde = false;
    }

    // if(returnWaarde === false){
    //     document.getElementById("form_error").style.display = "block";
    // } else {
    //     document.getElementById("form_error").style.dysplay = "none";
    // }
    
    return returnWaarde;
}


// function facatuuradresjanee (){
//     var facatuurja = document.getElementById("ja")
//     var facatuurnee = document.getElementById("nee")

//     if (facatuurja.value == ""){
        
//     }else {

//     }
// }
    
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