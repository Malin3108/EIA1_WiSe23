
let myArray = ["Du stehst vor dem Eingang eines dunklen Labyrinths, gehe nun entweder links oder rechts weiter um den Ausgang zu finden. Für welchen Weg entscheidest du dich?", "Du triffst auf eine Person, willst du mit ihr weitergehen?", "Glückwunsch! Die Person zeigt dir den Ausweg und du überlebst.", "Ohje! Wärst du bloß mitgegangen. Du verirrst dich und verhungerst.", "Du findest eine Kiste, möchtest du sie öffnen?", "An dem Schloss war tödliches Gift platziert, leider ist das das Ende für dich.", "Glückwunsch! Nur ein paar Meter weiter findest du den Ausgang und du überlebst."];
//Container meiner Strings, können über ihren Index ausgegeben werden

let myPrompt = myFirstFunction(myArray[0]) 
//prompt wird über Array Index definiert
if (myPrompt == "links") { 
    let newPrompt = myFirstFunction(myArray[1]);
    //Bedingung: wenn links eingegeben wurde, wird Array 1 angezeigt
    if (newPrompt == "ja") {
    alert = myFunction(myArray[2])
    } else if (newPrompt== "nein") {
    alert = myFunction(myArray[3])
    }
}

else if (myPrompt == "rechts") { 
    let otherPrompt = myFirstFunction(myArray[4])
    if (otherPrompt == "ja") {
        alert = myFunction(myArray[5])
    } else if (otherPrompt == "nein") {
        alert = myFunction(myArray[6])
    }
}
else {
    console.log("wrong input")
    //gibt mir in der Konsole an wenn etwas ungültiges eingegeben wurde
}
function myFirstFunction(geschichte) {
    return prompt(geschichte)
}
//Funktion die mit dem Parameter geschichte definiert wurde, kann jeden Prompt durch Array Index annehmen
//return gibt meine Funktion als Prompt aus

function myFunction(ende) {
    return alert(ende)
}