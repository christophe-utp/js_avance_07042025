function createLogger(prefix) {
    return function(message){
      return `${prefix} ${message}`
    }
  }
  
  const logInfo = createLogger("[INFO]");
  console.log(logInfo("Connexion établie")); // Résultat attendu : "[INFO] Connexion établie"


  function createMultiplier(n) {
    return function(x) {
      return x * n;
    }
  }
  
  const triple = createMultiplier(3);
  console.log(triple(4)); // Résultat attendu : 12

