const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(PORT, () => console.log(`checking... http://localhost:${PORT}`))

app.get('/paper', (request, response) => {
    response.status(200).send({
        paper: '📝',
        amount: '1'
    })
});

app.post('/paper/:id', (request, response) => {
    const {id} = request.params;
    const {size} = request.body;

    if (!size) {
        response.status(418).send({message:'There needs to be a paper size'})
    }

    response.send({
        paper: `Here is your 📝 that is of size ${size}`,
    });
});