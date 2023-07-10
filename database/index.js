const server = require('./src/server');
const { Character } = require('./src/database');
const PORT_DATABASE = 8004;

 Character.find()
 .populate('homeworld',['_id','name'])
 .populate('films',['_id','title'])
 .then( (res)=> console.log(res));

server.listen(PORT_DATABASE,(req,res)=> {
    console.log(`listening on port ${PORT_DATABASE}`);
})