const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(201).json({
        message: 'Welcome to Multiverse of Madness'
    })
})

app.use('/api/users', require('./Routes/userRoutes'))

app.listen(PORT, ()=> {
    console.log('Server is Running...');
})