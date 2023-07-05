const Planet       = require('../data');
const { response } = require('../utils');

module.exports = async (req,res)=> {
    try {
        const newPlanet =await  Planet.create();    
        response(res,201, newPlanet);
    } catch (error) {
        res.status(400).json( { error: error.message});
    }
};