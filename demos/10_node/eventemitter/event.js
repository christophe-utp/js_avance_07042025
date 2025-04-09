
// function traitement(){
//     console.log("Etape 1")
//     console.log("Etape 2")
//     console.log("Etape 3")
// }

const EventEmitter = require("events")

class Process extends EventEmitter {
    run(){
        this.emit("start")
        this.emit("step",1);
        this.emit("step",2);
        this.emit("finish")
    }
}

const p = new Process();

p.on("start", () => console.log(" Démarrage ") )
p.on("step", (n) => console.log("Etape : "+n))
p.on("finish", () => console.log(" termine !!!"))

p.run()