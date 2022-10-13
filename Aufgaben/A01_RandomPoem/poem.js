var zufälligesgedicht;
(function (zufälligesgedicht) {
    var subjekte = [
        "Harry", "Hermine", "Dumbledore", "Ron", "Snape", "Draco"
    ];
    var verben = [
        "braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"
    ];
    var objekte = [
        "Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"
    ];
    for (var index = 6; index >= 1; index--) {
        var vollständigersatz = getVerse(subjekte, verben, objekte);
        console.log(vollständigersatz);
    }
    function getVerse(_subjekte, _verben, _objekte) {
        var zufälligsubjekt = Math.floor(Math.random() * _subjekte.length);
        var zufälligverben = Math.floor(Math.random() * _subjekte.length);
        var zufälligobjekte = Math.floor(Math.random() * _subjekte.length);
        var verse = _subjekte[zufälligsubjekt] + " " + _verben[zufälligverben] + " " + _objekte[zufälligobjekte] + ".";
        _subjekte.splice(zufälligsubjekt, 1);
        _verben.splice(zufälligverben, 1);
        _objekte.splice(zufälligobjekte, 1);
        return verse;
    }
})(zufälligesgedicht || (zufälligesgedicht = {}));
