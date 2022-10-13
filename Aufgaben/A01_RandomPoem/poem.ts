namespace zufälligesgedicht {
    let subjekte: string[] = [
        "Harry", "Hermine", "Dumbledore", "Ron", "Snape", "Draco"
    ];

    let verben: string[] = [
        "braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"
    ];

    let objekte: string[] = [
        "Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"
    ];

    console.log(subjekte),
    console.log(verben),
    console.log(objekte)

    for (let index: number = 6; index >= 1; index--) {
        let vollständigersatz: string = getVerse(subjekte, verben, objekte);
        console.log(vollständigersatz);
    }

    function getVerse(_subjekte: string[], _verben: string[], _objekte:string[]): string {
        let zufälligsubjekt: number = Math.floor(Math.random() * _subjekte.length);
        let zufälligverben: number = Math.floor(Math.random() * _subjekte.length);
        let zufälligobjekte: number = Math.floor(Math.random() * _subjekte.length);

        let verse: string = _subjekte[zufälligsubjekt] + " " + _verben[zufälligverben] + " " + _objekte[zufälligobjekte] + ".";

        _subjekte.splice(zufälligsubjekt, 1);
        _verben.splice(zufälligverben, 1);
        _objekte.splice(zufälligobjekte, 1);

        return verse;
    }
}