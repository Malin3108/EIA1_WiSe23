const stories = [
    "Du triffst auf eine Person, gehst du mit ihr mit?",
    "Du findest eine Kiste, öffnest du sie?"
]

const stories2 = [
    "Die Person zeigt dir den Ausgang",
    "Du verirrst dich und verhungerst"
]

const stories3 = [
    "Die Kiste war vergiftet, du stirbst",
    "Nur ein paar Meter findest du den Ausgang und überlebst"
]

let state = 0;
//gibt an in welchem Abschnitt der Story man sich befindet

const input = document.getElementById("input1") //input1 wird aus dem html dokument selektiert
const output = document.getElementById("output") //outout wird aus dem html Dokument selektiert

input.addEventListener("keydown", function (event) { 
    if (event.key == "Enter") { //wenn die Enter Taste gedrückt wird, passiert ein Event, das Event ist, 
        //dass die einzelnen Story Abschnitte aufgerufen werden unter bestimmten Bedingungen
        const inputValue = input.value.toLowerCase();

        if (state == 0) { //Story Abschnitt 0
            if (inputValue == "links") {
                output.innerText = stories[0]; //wenn der Benutzer 'links eintippt', wird stories[0] angezeigt
                state = 1; //jetzt im Story Abschnitt 1
            } else if (inputValue == "rechts") {
                output.innerText = stories[1];
                state = 2; //jetzt im Story Abschnitt 2
            } else {
                output.innerText = "Ungültige Eingabe";
            }
        } else if (state == 1) {
            if (inputValue == "ja") {
                output.innerText = stories2[0];
                state = 3;
            } else if (inputValue == "nein") {
                output.innerText = stories2[1];
                state = 4;
            } else {
                output.innerText = "Ungültige Eingabe";
            }
        } else if (state == 2) {
            if (inputValue == "ja") {
                output.innerText = stories3[0];
                state = 5;
            } else if (inputValue == "nein") {
                output.innerText = stories3[1];
                state = 6;
            } else {
                output.innerText = "Ungültige Eingabe";
            }
        }


        input.value = ""; //Eingabe löscht sich danach raus
    }
})