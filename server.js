const express = require('express');
const morgan = require('morgan');

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
    res.send('Pokemon for life!')
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is active at http://localhost:${PORT}`)
});