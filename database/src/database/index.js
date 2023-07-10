const mongoose = require('mongoose'); //CORRECTO

const { MONGO_URI } = require('../config/envs'); //CORRECTO

const conn = mongoose.createConnection(MONGO_URI);

conn.once('open', () => {
  console.log('Conexión exitosa a la base de datos'); 
  
}); 

 
// Escuchar el evento 'open' para verificar la conexión exitosa
/* conn.once('open', () => {
  console.log('Conexión exitosa a la base de datos'); */
  // Aquí puedes realizar cualquier operación adicional que dependa de la conexión establecida
  /* const Character = conn.model('Character',require('./schemas/characterSchema'));
  const Film      = conn.model('Film',require('./schemas/filmSchema'));
  const Planet    = conn.model('Planet',require('./schemas/planetSchema')); */
   

  /* Character.find()
    .populate('films',['_id','title'])
    .then( (res)=> console.log(res[1]));
}); */


module.exports = {
  Character: conn.model('Character',require('./schemas/characterSchema')),
  Film     : conn.model('Film',require('./schemas/filmSchema')),
  Planet   : conn.model('Planet', require('./schemas/planetSchema')),
}