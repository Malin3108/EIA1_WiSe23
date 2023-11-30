let myPrompt = prompt("Du stehst vor dem Eingang eines dunklen Labyrinths, gehe nun entweder links oder rechts weiter um den Ausgang zu finden. Für welchen Weg entscheidest du dich?");

if (myPrompt == "links" || myPrompt == "Links") {
    console.log("Du triffst auf eine Person")
    let newPrompt = prompt("Du triffst auf eine Person, willst du mit ihr weitergehen?")
    if (newPrompt == "ja" || newPrompt == "Ja") {
        console.log("Die Person zeigt dir den Ausgang")
        alert("Glückwunsch! Die Person zeigt dir den Ausweg und du überlebst.")
    } else if (newPrompt == "nein" || newPrompt == "Nein") {
        console.log("Du verirrst dich")
        alert("Ohje! Wärst du bloß mitgegangen. Du verirrst dich und verhungerst.")
    }
}

else if (myPrompt == "rechts" || myPrompt == "Rechts") {
    console.log("Du findest eine Kiste")
    let otherPrompt = prompt("Du findest eine Kiste, möchtest du sie öffnen?")
    if (otherPrompt == "ja" || otherPrompt == "Ja") {
        console.log("Du wirst vergiftet")
        alert("An dem Schloss war tödliches Gift plaziert, leider ist dass das Ende für dich.")
    } else if (otherPrompt == "nein" || otherPrompt == "Nein") {
        console.log("Du überlebst")
        alert("Glückwunsch! Nur ein paar Meter weiter findest du den Ausgang und du überlebst.")
    }
}
else {
    console.log("wrong input")
}


