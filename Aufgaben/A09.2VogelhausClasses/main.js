/*
Aufgabe: L09.2_Vogelhaus
Name: Paula Jordans
Matrikel: 271121
Datum: 13.12.2022
Quellen: Pia Giovannelli, Julia Befus, Aanya Khetarpal, Paula Jordans
*/
var Vogelhaus_obj;
(function (Vogelhaus_obj) {
    let clouds = [];
    let birds = [];
    let imageData;
    window.addEventListener("load", fillCanvas);
    window.addEventListener("resize", fillCanvas, false);
    window.addEventListener("orientationchange", fillCanvas, false);
    function fillCanvas(_event) {
        Vogelhaus_obj.canvas = document.querySelector("canvas");
        Vogelhaus_obj.crc2 = Vogelhaus_obj.canvas.getContext("2d");
        // responsive canvas size
        Vogelhaus_obj.canvas.width = window.innerWidth * 0.95;
        Vogelhaus_obj.canvas.height = window.innerHeight * 0.85;
        createBackground();
        createClouds();
        createSnowman();
        createbirdsitting();
        let birdhouse = new Vogelhaus_obj.Birdhouse();
        birdhouse.draw();
        createBirds(10);
        imageData = Vogelhaus_obj.crc2.getImageData(0, 0, Vogelhaus_obj.canvas.width, Vogelhaus_obj.canvas.height);
        animate();
    }
    function createBackground() {
        let background = new Vogelhaus_obj.Background;
        background.draw();
        let sun = new Vogelhaus_obj.Sun((new Vogelhaus_obj.Vector(Vogelhaus_obj.canvas.width * 0.1, Vogelhaus_obj.canvas.height * 0.12)));
        sun.draw();
        let higherMountains = new Vogelhaus_obj.MountainRange(new Vogelhaus_obj.Vector(0, Vogelhaus_obj.canvas.height * 0.38), Vogelhaus_obj.canvas.height * 0.08, Vogelhaus_obj.canvas.height * 0.15, "black", "white");
        higherMountains.draw();
        let lowerMountains = new Vogelhaus_obj.MountainRange(new Vogelhaus_obj.Vector(0, Vogelhaus_obj.canvas.height * 0.38), Vogelhaus_obj.canvas.height * 0.05, Vogelhaus_obj.canvas.height * 0.09, "#442b0b", "#c09682");
        lowerMountains.draw();
        let trees = new Vogelhaus_obj.TreeLine(0, 15);
        trees.draw();
    }
    function createClouds() {
        clouds.push(new Vogelhaus_obj.Cloud(new Vogelhaus_obj.Vector(Vogelhaus_obj.canvas.width * 0.8, Vogelhaus_obj.canvas.height * 0.5)));
        clouds.push(new Vogelhaus_obj.Cloud(new Vogelhaus_obj.Vector(Vogelhaus_obj.canvas.width * 0.4, Vogelhaus_obj.canvas.height * 0.08)));
    }
    function createBirds(_amount) {
        for (let i = 0; i < _amount; i++) {
            let randomScale = randomNumber(0.5, 1.7);
            let randomVelocity = new Vogelhaus_obj.Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));
            birds.push(new Vogelhaus_obj.Birds(new Vogelhaus_obj.Vector(Vogelhaus_obj.canvas.width / 2, Vogelhaus_obj.canvas.height * 0.95), new Vogelhaus_obj.Vector(randomVelocity.x, randomVelocity.y), randomScale));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        Vogelhaus_obj.crc2.clearRect(0, 0, Vogelhaus_obj.canvas.width, Vogelhaus_obj.canvas.height);
        Vogelhaus_obj.crc2.putImageData(imageData, 0, 0);
        for (let i = 0; i < clouds.length; i++) {
            clouds[i].update();
        }
        for (let i = 0; i < clouds.length; i++) {
            birds[i].update();
        }
    }
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    Vogelhaus_obj.randomNumber = randomNumber;
    function createSnowman() {
        //Schneekugeln
        let radius = 40;
        let positionX = 300;
        let positionY = 350;
        for (let i = 0; i < 3; i++) {
            Vogelhaus_obj.crc2.beginPath();
            Vogelhaus_obj.crc2.arc(positionX, positionY, radius, 0, 2 * Math.PI);
            Vogelhaus_obj.crc2.fillStyle = "white";
            Vogelhaus_obj.crc2.fill();
            Vogelhaus_obj.crc2.stroke();
            Vogelhaus_obj.crc2.closePath();
            positionY = positionY + radius + 50;
            radius = radius + 10;
        }
        //Augen
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.arc(positionX - 10, positionY - 307, radius - 66, 0, 2 * Math.PI);
        Vogelhaus_obj.crc2.fillStyle = "black";
        Vogelhaus_obj.crc2.fill();
        Vogelhaus_obj.crc2.closePath();
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.arc(positionX + 8, positionY - 307, radius - 66, 0, 2 * Math.PI);
        Vogelhaus_obj.crc2.fillStyle = "black";
        Vogelhaus_obj.crc2.fill();
        Vogelhaus_obj.crc2.closePath();
        //Knöpfe
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.arc(positionX + 1, positionY - 190, radius - 66, 0, 2 * Math.PI);
        Vogelhaus_obj.crc2.fillStyle = "black";
        Vogelhaus_obj.crc2.fill();
        Vogelhaus_obj.crc2.closePath();
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.arc(positionX + 1, positionY - 210, radius - 66, 0, 2 * Math.PI);
        Vogelhaus_obj.crc2.fillStyle = "black";
        Vogelhaus_obj.crc2.fill();
        Vogelhaus_obj.crc2.closePath();
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.arc(positionX + 1, positionY - 230, radius - 66, 0, 2 * Math.PI);
        Vogelhaus_obj.crc2.fillStyle = "black";
        Vogelhaus_obj.crc2.fill();
        Vogelhaus_obj.crc2.closePath();
    }
    function createbirdsitting() {
        let positionx = 700;
        let positiony = 393;
        //Unterkörper
        let radius2 = 12;
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.arc(positionx, positiony, radius2, 0, 2 * Math.PI);
        Vogelhaus_obj.crc2.fillStyle = randomColor();
        Vogelhaus_obj.crc2.fill();
        Vogelhaus_obj.crc2.stroke();
        Vogelhaus_obj.crc2.closePath();
        //Kopf
        let radius = 10;
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.arc(positionx - 10, positiony - 10, radius, 0, 2 * Math.PI);
        Vogelhaus_obj.crc2.fillStyle = randomColor();
        Vogelhaus_obj.crc2.fill();
        Vogelhaus_obj.crc2.stroke();
        Vogelhaus_obj.crc2.closePath();
        Vogelhaus_obj.crc2.restore();
        //Schnabel
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.moveTo(positionx - 20, positiony - 10);
        Vogelhaus_obj.crc2.lineTo(positionx - 25, positiony - 5);
        Vogelhaus_obj.crc2.stroke();
        Vogelhaus_obj.crc2.closePath();
        Vogelhaus_obj.crc2.restore();
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.moveTo(positionx - 19, positiony - 5);
        Vogelhaus_obj.crc2.lineTo(positionx - 25, positiony - 5);
        Vogelhaus_obj.crc2.stroke();
        Vogelhaus_obj.crc2.closePath();
        Vogelhaus_obj.crc2.restore();
        //Bein
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.moveTo(positionx, positiony + 5);
        Vogelhaus_obj.crc2.lineTo(positionx, positiony + 20);
        Vogelhaus_obj.crc2.stroke();
        Vogelhaus_obj.crc2.closePath();
        Vogelhaus_obj.crc2.restore();
        //Fuß
        Vogelhaus_obj.crc2.beginPath();
        Vogelhaus_obj.crc2.moveTo(positionx, positiony + 20);
        Vogelhaus_obj.crc2.lineTo(positionx - 5, positiony + 20);
        Vogelhaus_obj.crc2.stroke();
        Vogelhaus_obj.crc2.closePath();
        Vogelhaus_obj.crc2.restore();
    }
    //Funktion zufällige Farbe 
    function randomColor() {
        let letters = "0123456789";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
    }
})(Vogelhaus_obj || (Vogelhaus_obj = {}));
//# sourceMappingURL=main.js.map