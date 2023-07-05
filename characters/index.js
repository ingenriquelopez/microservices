const server = require('./src/server.js');

const PORT_CHARACTERS = 8001;

server.listen(PORT_CHARACTERS,(req,res)=> {
    console.log(PORT_CHARACTERS)
})