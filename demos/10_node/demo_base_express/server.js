const express = require("express")

const app = express();

const port = 3000;

// Middleware
app.use(express.json())

// Route get
app.get("/",(req,res) => {
   // res.send("Hello Wold !!!")
   res.json({ message : "Hello Wold !!!" , user : "toto"})
})

app.get("/param/:id", (req,rep) => {
    const id = req.params.id
    rep.json({ idrecup : id, message : "C'est bien votre id ?"})
})

app.post('/envoie',(req,rep) => {
    const corp = req.body
    rep.json({ id : 42, message : "Post réussi", ...corp})
})

app.delete("/del",(req,rep) => {
    rep.json({ id : 55, message : "Delete réussi"})
})

// lancement du serveur
app.listen(port, () => {
    console.log(`Serveur lance sur http://localhost:${port}`)
})