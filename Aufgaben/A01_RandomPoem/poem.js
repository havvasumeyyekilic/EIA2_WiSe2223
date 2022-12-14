/*
Aufgabe: 1. Zufallsgedicht
Name: Havva Sümeyye Kilic
Matrikelnr: 271123
Datum: 12.10.2022
Quellen: Paula Jordans, AAnya Khetarpal, Julia Befus, Pia Giovannelli
*/
var randompoem;
(function (randompoem) {
    let subjekte = [
        "Harry", "Hermine", "Dumbledore", "Ron", "Snape", "Draco"
    ];
    let verben = [
        "braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"
    ];
    let objekte = [
        "Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"
    ];
    console.log(subjekte),
        console.log(verben),
        console.log(objekte);
    for (let index = 6; index >= 1; index--) {
        let vollständigersatz = getVerse(subjekte, verben, objekte);
        console.log(vollständigersatz);
    }
    function getVerse(_subjekte, _verben, _objekte) {
        let zufälligsubjekt = Math.floor(Math.random() * _subjekte.length);
        let zufälligverben = Math.floor(Math.random() * _subjekte.length);
        let zufälligobjekte = Math.floor(Math.random() * _subjekte.length);
        let verse = _subjekte[zufälligsubjekt] + " " + _verben[zufälligverben] + " " + _objekte[zufälligobjekte] + ".";
        _subjekte.splice(zufälligsubjekt, 1);
        _verben.splice(zufälligverben, 1);
        _objekte.splice(zufälligobjekte, 1);
        return verse;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=poem.js.map