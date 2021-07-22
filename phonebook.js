const express = require("express")
let persons = require("./persons.js")


const app = express()
app.use(express.json())

app.get("/", (request, response) => {
    response.send("<h1>Hello from Phonebook</h1>")
})

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})