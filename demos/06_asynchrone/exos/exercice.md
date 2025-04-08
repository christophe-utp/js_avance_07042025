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