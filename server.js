const express = require('express');
const app = express();
const PORT = 4001;

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "123-345-3234"
    },

    {
        "id": 2,
        "name": "John Atrur",
        "number": "+244-87972-232"
    },

    {
        "id": 3,
        "name": "Joaa Sacarima",
        "number": "234-8989-3"
    },

    {
        "id": 4,
        "name": "Luisa Maria",
        "number": "1190-3434-232"
    },

    {
        "id": 5,
        "name": "Bruno king",
        "number": "90232-232-4545"
    },
    {
        "id": 5,
        "name": "larry wheels",
        "number": "231-232-111"
    },
    {
        "id": 7,
        "name": "yuru bull",
        "number": "+244-87765ß2-232"
    }
];

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})
