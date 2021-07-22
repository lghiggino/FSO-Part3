const express = require("express")
const app = express()
app.use(express.json())

let persons = require("./persons.js")


// ROUTES
app.get("/", (request, response) => {
    response.send("<h1>Hello from Phonebook</h1>")
})

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

//get ONE
app.get("/api/persons/:id", (request, response) => {
    const idNumber = +request.params.id
    const singlePerson = persons.filter(p => p.id === idNumber)
    if (singlePerson) {
        response.json(singlePerson)
    } else {
        response.status(404).end()
    }
})

//delete ONE
app.delete("/api/persons/:id",  (request, response) => {
    const idNumber = +request.params.id
    persons = persons.filter(p => p.id !== idNumber)

    response.status(204).end()
})



app.get("/info", (request, response) => {
    const personsLenght = persons.length
    const newDate = new Date()

    response.send(`
        <div>
            <h2>Phonebook has info for ${personsLenght} people</h2>
            <p> ${newDate} </p>
        </div>
    `)
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})