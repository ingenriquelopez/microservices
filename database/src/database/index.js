const mongoose = require('mongoose'); //CORRECTO
const { MONGO_URI } = require('../config/envs'); //CORRECTO
const conn = mongoose.createConnection(MONGO_URI); //CORRECTO

conn.once('open', () => {
  console.log('Conexión exitosa a la base de datos'); 
}); 

 
module.exports = {
  Character: conn.model('Character',require('./schemas/characterSchema')),
  Film     : conn.model('Film',require('./schemas/filmSchema')),
  Planet   : conn.model('Planet', require('./schemas/planetSchema')),
} 