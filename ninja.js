class Ninja {
    constructor(nombre, salud = 2, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log(`ninja's name is ${this.nombre}`);
    }
    showStats() {
        console.log(
            `Nombre ${this.nombre}, Fuerza ${this.fuerza}, Velocidad  ${this.velocidad} y Salud  ${this.salud}`
        );
    }
    dringSake() {
        this.salud += 10;
    }
}
const ninja1 = new Ninja("Hyabusa");
const ninja2 = new Ninja("Alex");
ninja1.sayName();
ninja1.showStats();
ninja2.dringSake();
ninja2.showStats();
class Sensei extends Ninja {
    constructor(nombre, sabiduría = 10) {
        super(nombre, 200, 10, 10, sabiduría);
    }
    speakWisdom() {
        this.dringSake();
        console.log(
            "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
        );
    }
}
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
