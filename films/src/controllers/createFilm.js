const Film = require('../data');
const { response } = require('../utils');


module.exports = async (req,res)=> {
    try {
        const newFilm =await  Film.create();    
        response(res,201, newFilm);
    } catch (error) {
        res.status(400).json( { error: error.message});
    }
};