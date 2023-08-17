const express = require('express');
const app = express();
const PORT = 4001;

app.use(express.json())

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
        "id": 6,
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

app.get('/info', (req, res) => {
    const currentDate = new Date()
    res.send(`<h2>Phonebook has info for 
    ${persons.length} people</h2> 
    <h2>${currentDate}</h2>`)
    console.log('loading')
} )

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const entry = persons.find(entry => entry.id == id)

    entry ? res.json(entry) : res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(entry => entry != id)
    res.status(204).end()
})

const generateId = () => {
    const maxID = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
    return maxID +1
}

app.post('/api/persons', (req, res) => {
    const body = req.body

    // Check if name or number is missing
    if (!body.name || !body.number) {
                return res.status(400).json({ error: 'Name or number is missing' });
            }
        
            // Check if the name already exists in the phonebook
            if (persons.some(entry => entry.name === body.name)) {
                return res.status(400).json({ error: 'Name already exists in the phonebook' });
            }

    let entry = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons.push(entry)
    res.json(entry)
})

// Generate a random ID within a specific range
// function generateRandomId() {
//     const min = 1000; // Minimum ID value
//     const max = 9999; // Maximum ID value
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// app.post('/api/persons', (req, res) => {
//     const body = req.body;

//     // Check if name or number is missing
//     if (!body.name || !body.number) {
//         return res.status(400).json({ error: 'Name or number is missing' });
//     }

//     // Check if the name already exists in the phonebook
//     if (persons.some(entry => entry.name === body.name)) {
//         return res.status(400).json({ error: 'Name already exists in the phonebook' });
//     }

//     const newPerson = {
//         id: generateRandomId(), // Generate a new ID
//         name: body.name,
//         number: body.number
//     };

//     persons.push(newPerson);
//     res.json(newPerson);
// });


app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})
