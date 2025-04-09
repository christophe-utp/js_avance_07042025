const WebSocket = require("ws");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = 3000;

// Sert les fichiers statiques du dossier "public"
app.use(express.static("public"));

// Historique en mémoire
let messages = [];

wss.on("connection", ws => {
  console.log("Nouveau client connecté");

  // Envoi de l'historique à l'arrivée
  messages.forEach(msg => ws.send(JSON.stringify({ type: "history", data: msg })));

  // Réception de message
  ws.on("message", data => {
    const message = data.toString();
    const entry = { text: message, timestamp: new Date().toISOString() };
    messages.push(entry); // Ajout à l'historique

    // Envoi à tous les clients connectés
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: "message", data: entry }));
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Serveur WebSocket & HTTP lancé sur http://localhost:${PORT}`);
});