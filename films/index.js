const server = require('./src/server');

const PORT_FILMS = 8002;

server.listen(PORT_FILMS,(req,res)=> {
    console.log(PORT_FILMS)
});