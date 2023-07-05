const server = require('./src/server');


const PORT_PLANETS = 8003;
server.listen(PORT_PLANETS, (req,res)=> {
    console.log(PORT_PLANETS);
})