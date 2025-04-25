import { Todo } from "./todo.js"
import {writeFileSync, readFileSync} from "fs"
export class App {
    constructor() {
        this.todos = []
        this.count = 0
        this.fichier = "data.json"
    }

    read() {
        const contenu = readFileSync(this.fichier).toString()
        this.todos = JSON.parse(contenu)
        this.count = (this.todos[this.todos.length - 1] != undefined) ? this.todos[this.todos.length - 1].id : 0
    }

    write() {
        writeFileSync(this.fichier, JSON.stringify(this.todos))
    }

    //Méthode de création
    createTodo(title, content) {
        const todo = new Todo(++this.count, title, content)
        this.todos.push(todo)
        this.write()
    }

    //Méthode pour récupérer un todo par id
    findTodoById(id) {
        return this.todos.find(t => t.id == id)
    }

    //Methode pour rechercher todos par titre
    searchTodosByTitle(search) {
        return this.todos.filter(t => t.title.includes(search))
    }


    //Methode pour mettre à jour le statut d'un todo
    updateTodoStatus(id) {
        const todo = this.findTodoById(id)
        if(todo != undefined) {
            todo.status = !todo.status
            this.write()
            return true
        }
        return false
    }

    //Methode pour supprimer un todo
    deleteTodo(id) {
        const todo = this.findTodoById(id)
        if(todo != undefined) {
            this.todos = this.todos.filter(t => t.id != id)
            this.write()
            return true
        }
        return false
    }
}