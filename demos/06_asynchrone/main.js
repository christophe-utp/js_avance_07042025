const log = (msg) => document.getElementById("output").textContent += msg + "\n";

 // Promesse simple
 const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(`Attendu ${ms} ms`), ms));

 delay(1000).then(log);

 // async/await
 async function demoAsyncAwait() {
   log("Début...");
   const msg = await delay(500);
   log("Résultat après await : " + msg);
 }
 demoAsyncAwait();

 // fetch avec async/await
 async function fetchPost() {
   try {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
     const data = await response.json();
     log("Titre du post : " + data.title);
   } catch (err) {
     log("Erreur lors du fetch : " + err.message);
   }
 }
 fetchPost();

 log("Demo asynchrone")