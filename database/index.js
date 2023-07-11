const server = require('./src/server');
const { Character, Film, Planet } = require('./src/database');
const PORT_DATABASE = 8004;

/* Planet.list().then( (res)=> console.log(res)); */

server.listen(PORT_DATABASE,(req,res)=> {
    console.log(`listening on port ${PORT_DATABASE}`);
})