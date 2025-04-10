import express from "express"
import { FileService } from "./classes/fileService.js"
import cors from "cors"
//Un objet pour gérer les données
const dataService = new FileService()

//Notre objet express
const api = express()

//Utilisation d'un middleware json
api.use(express.json())

api.use(cors({origin:"*"}))
//Endpoint pour créer un todo
api.post('/todos', (req, res) => {
    const {title, content} = req.body
    if(title != undefined && content != undefined) {
        dataService.createTodo(title, content)
        res.json({message: "todo ajouté", error:false})
    }
    else
        res.json({message: "Merci de envoyer un titre et un contenu"})
})

//Endpoint pour récuperer la liste des todos
api.get('/todos', (req, res) => {
    res.json(dataService.todos)
})

//Endpoint pour récupérer un seul todo
api.get('/todos/:id', (req, res) => {
    const todo = dataService.findTodoById(req.params.id)
    if(todo != undefined)
        res.json(todo)
    else
        res.json({mesage: "aucun todo avec cet id"})
})

//Endpoint pour la recherche
api.get('/todos/search/:search', (req, res) => {
    res.json(dataService.searchTodosByTitle(req.params.search))
})

//EndPoint pour la suppression d'un todo
api.delete('/todos/:id', (req, res) => {
    if(dataService.deleteTodo(req.params.id)) 
        res.json({message: 'todo supprimé'})
    else 
        res.json({message: 'erreur suppression todo'})
})

//EndPoint pour la mise à jour du statut
api.patch('/todos/:id', (req, res) => {
    if(dataService.updateTodoStatus(req.params.id)) {
        res.json({message : "statut modifié"})
    }
    else {
        res.json({message: "erreur de modification du statut"})
    }
})

api.listen(80, () => {
    dataService.read()
})