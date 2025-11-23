const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/livraria')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro na conexão:', err));

module.exports = mongoose;