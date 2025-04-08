/*
## Récupération de données avec `fetch`
Utilise `fetch` pour obtenir le titre du post ID 3 sur l’API JSONPlaceholder.

## Gestion d’erreur
Améliore l’exercice précédent avec un `try/catch` pour gérer une URL invalide.

## Créer une promesse
Crée une promesse qui se résout après 2 secondes avec le message `"Fini !"`, puis affiche le résultat.

## Utiliser async/await
Crée une fonction `delayedHello()` qui attend 1 seconde puis affiche `"Hello async"`.

## **Exercice : Vérification d’un mot de passe**

Créer une fonction `verifierMotDePasse(motDePasse)` qui retourne une promesse.

- Si le mot de passe fait **au moins 8 caractères**, la promesse est **résolue** avec le message :  
  `"Mot de passe accepté ✅"`  
- Sinon, la promesse est **rejetée** avec le message :  
  `"Mot de passe trop court ❌"`  

Ensuite, **tester la fonction** avec deux exemples : un mot de passe trop court, et un valide.

*/
async function getPostTitle(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    console.log(data.title)
}

getPostTitle(3)

async function getPostTitleV2(id){
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) throw new Error("Echec lors du fetch !!!!");
        const data = await res.json();
        console.log(data.title)
    }catch (e){
        console.error("erreur : "+e.message)
    }
}

getPostTitleV2(9999)


const p = new Promise(resolve => {
    setTimeout(() => resolve("Fini !"), 2000);
});

p.then(console.log);


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function delayedHello() {
    await wait(1000);
    console.log("Hello async");
}
  
delayedHello();

function verifierMotDePasse(motDePasse){
    return new Promise((resolve,reject) => {
            if(motDePasse.length >= 8) {
                resolve("Mot de passe ok !!!")
            }else {
                reject("Mot de passe incorrect !!!")
            }
    })
}


verifierMotDePasse("toto")
    .then((message) => console.log(message))
    .catch((erreur) => console.log(erreur));

verifierMotDePasse("tototatatiti")
    .then((message) => console.log(message))
    .catch((erreur) => console.log(erreur));

async function testMotDePasse(motdepasse) {
    try {
        const result = await verifierMotDePasse(motdepasse)
        console.log("Succees : "+result)
    }catch(erreur){
        console.error("erreur : "+erreur)
    }
}

testMotDePasse("toto");
testMotDePasse("tototatatiti")