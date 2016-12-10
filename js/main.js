//validate form - stworzymy funkcję validate form i wyświetli alerta
// trzeba lisenera przełączyć w JS


"use strict";

//document.getElementById("wyslij").addEventListener("click", validateForm);
//
//function validateForm () {
//}

document.getElementById("wszystkie-zgody").addEventListener("click", checkBox);

function checkBox () {
    if(document.getElementById("wszystkie-zgody").checked) {
        document.getElementById("zgoda-marketingowa-1").disabled = true;
        document.getElementById("zgoda-marketingowa-2").disabled = true;
        document.getElementById("zgoda-marketingowa-1").checked = true;
        document.getElementById("zgoda-marketingowa-2").checked = true;
    } else {
        document.getElementById("zgoda-marketingowa-1").disabled = false;
        document.getElementById("zgoda-marketingowa-2").disabled = false;
        document.getElementById("zgoda-marketingowa-1").checked = false;
        document.getElementById("zgoda-marketingowa-2").checked = false;
        
    }
}


document.getElementById("wyslij").addEventListener("click", validateForm);

function validateForm (e) {
    var zgoda1 = document.getElementById("zgoda-marketingowa-1");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    
    if (zgoda1.checked == false) {
        e.preventDefault();
        document.getElementById("display").innerHTML="To pole jest wymagane";
        document.getElementById("display2").innerHTML="To pole jest wymagane";
    }
    
}
    

