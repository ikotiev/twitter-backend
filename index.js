const express = require('express');
const mongoose = require('mongoose')

const app = express();

app.use(express.json())
app.use(require('./routes'))

mongoose.connect('mongodb+srv://ikotiev:mosremonting06@cluster0.tlczq6f.mongodb.net/Twitter?retryWrites=true&w=majority',
    () => {
        console.log('Подключение к MongoDB успешно')
        app.listen(3500, () => {
            console.log('Сервер запущен, порт: http://localhost:3500')
        })
    }
)