const log = (msg) => document.getElementById('output').textContent += msg + "\n";


// typage faible
log("'5' + 1 =" + ('5' + 1)) // "51"
log("'5' - 1 =" + ('5' - 1)) // 4

// hoisting
log(x) // undefined
var x = 10;


// variable globale implicite
function badPractice(){
    implicitGlobal = "Toto"
}

badPractice()
log(window.implicitGlobal)

// this changeant

const user = {
    name: "Toto",
    getName: function(){
        return this.name;
    }
}

log("user.getName() = "+ user.getName()) // Toto

const f = user.getName;
log("f() hors contexte = "+ f()) // undefined

// bind
const bound = user.getName.bind(user)
log("bound() = "+bound()) // Toto