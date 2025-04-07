// main.js

function demoBreakpoints() {
    const a = 2;
    const b = 3;
    const somme = a + b; // ← Place ton breakpoint ici
    console.log("Résultat :", somme);
  }
  
  function demoStep() {
    function soustraction(x, y) {
      return x - y;
    }
  
    const result = soustraction(10, 4); // Step Into ici
    console.log("Résultat :", result);
  }
  
  function demoWatch() {
    let x = 5;
    let total = 0;
  
    for (let i = 0; i < x; i++) {
      total += i; // ← Ajoute "i" et "total" dans le watch
      // debugger;
    }
    console.log("Total :", total);
  }
  
  function demoCallStack() {
    function niveau1() {
      niveau2();
    }
  
    function niveau2() {
      niveau3();
    }
  
    function niveau3() {
      console.log("Dernier niveau"); // ← Observe la stack ici
    }
  
    niveau1();
  }
  
  function demoConditionalBreakpoint() {
    for (let i = 0; i < 5; i++) {
      console.log("Itération :", i); // ← Breakpoint conditionnel : i === 3
    }
  }
  
  function demoAsync() {
    setTimeout(() => {
      console.log("setTimeout exécuté");
    }, 1000);
  
    Promise.resolve().then(() => {
      console.log("Promise résolue");
    });
  }
  
  function demoClosure() {
    function f_externe() {
      const secret = 42;
      function interne() {
        console.log("Le secret est :", secret); // ← Breakpoint ici
      }
      return interne;
    }
  
    const fn = f_externe();
    fn();
  }

  function demoLiveEdit() {
    let message = "Texte original"; // ← Place un breakpoint ici
    document.getElementById("live-edit-result").textContent = message;
  }
  
  