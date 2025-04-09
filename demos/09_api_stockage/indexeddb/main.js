let db;
const dbName = "demoDB";
const storeName = "messages";

const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const messageList = document.getElementById('messageList');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');

// Ouvrir ou créer la base de données
// Ouverture (ou création) de la base de données IndexedDB nommée "demoDB" avec version 1
const request = indexedDB.open(dbName, 1);

// Gère les erreurs d'ouverture de la base (ex: refus d'accès, incompatibilité navigateur)
request.onerror = (event) => {
    console.error("Erreur IndexedDB", event);
};

// Si l'ouverture réussit, on récupère l'instance de la base dans `db`
// et on peut ensuite interagir avec elle (ajouter/lire/supprimer)
request.onsuccess = (event) => {
    db = event.target.result;
    afficherMessages(); // affiche les données existantes au chargement
};

// Cette fonction est appelée seulement si la base est créée pour la première fois
// ou si la version change (ce qui permet de mettre à jour la structure)
request.onupgradeneeded = (event) => {
    db = event.target.result;

    // Création d’un objet de stockage (équivalent d’une table), nommé "messages"
    // `keyPath: 'id'` définit la clé primaire de chaque enregistrement, ici un champ `id`
    // `autoIncrement: true` permet d’auto-incrémenter cette clé
    const objectStore = db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });

    // Ajout d’index pour permettre des recherches rapides sur les champs "nom" et "message"
    // Ici, pas besoin d’unicité car plusieurs messages peuvent venir d’un même nom
    objectStore.createIndex("nom", "nom", { unique: false });
    //  objectStore.createIndex("message", "message", { unique: false });
};


// Ajouter un message
addBtn.addEventListener('click', () => {
    // Récupère les valeurs saisies par l'utilisateur
    const nom = nameInput.value.trim();
    const message = messageInput.value.trim();

    // Vérifie que les deux champs sont remplis
    if (!nom || !message) return alert("Remplis les deux champs.");

    // Ouvre une transaction en écriture sur le store
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);

    // Ajoute un objet { nom, message } dans le store
    const ajout = store.add({ nom, message });

    // Lorsque l'ajout est terminé, on vide les champs et on met à jour l'affichage
    ajout.onsuccess = () => {
        nameInput.value = "";
        messageInput.value = "";
        afficherMessages();
    };
});

// Afficher les messages
function afficherMessages() {
    // Ouvre une transaction en lecture seule
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);

    // Utilise un curseur pour parcourir tous les objets du store
    const req = store.openCursor();

    // Réinitialise l'affichage de la liste HTML
    messageList.innerHTML = "";

    // Traite chaque entrée rencontrée par le curseur
    req.onsuccess = (event) => {
        const cursor = event.target.result;

        // Si on a une entrée, on l'affiche, puis on passe à la suivante
        if (cursor) {
            const { nom, message } = cursor.value;

            // Crée un élément <li> pour afficher le message
            const li = document.createElement('li');
            li.innerHTML = `<strong>${nom}</strong> : ${message}`;
            messageList.appendChild(li);

            // Passe à l'entrée suivante
            cursor.continue();
        }
    };
}

// Tout supprimer
clearBtn.addEventListener('click', () => {
    // Ouvre une transaction en écriture sur le store
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);

    // Supprime tous les objets du store
    const req = store.clear();

    // Lorsque la suppression est terminée, on vide l'affichage HTML
    req.onsuccess = () => {
        messageList.innerHTML = "";
        alert("Tous les messages ont été supprimés.");
    };
});