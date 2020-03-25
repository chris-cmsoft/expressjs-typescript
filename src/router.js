const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    return resp.json({});
});

module.exports = app;