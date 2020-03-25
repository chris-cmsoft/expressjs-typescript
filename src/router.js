const express = require('express');
const app = express();
const {Library} = require('../models/library');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, resp) => {
    return resp.json({});
});

app.get('/libraries', async (request, response) => {
    const libraries = await Library.findAll();

    return response.json(libraries);
});

app.post('/libraries', async (request, response) => {
    console.log(request.body.foo);
    const { name } = request.body;
    const library = await Library.create({
        name,
    });
    return response.status(201).json(library);
});

app.patch('/libraries/:id', async (request, response) => {
    await Library.update(request.body, {
        where: {
            id: request.params.id,
        }
    });
    const library = await Library.findByPk(request.params.id);
    return response.json(library);
});

app.delete('/libraries/:id', async (request, response) => {
    await Library.destroy({
        where: {
            id: request.params.id,
        }
    });
    return response.status(200).json('');
});

module.exports = app;