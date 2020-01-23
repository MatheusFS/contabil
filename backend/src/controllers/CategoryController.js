// const axios = require('axios');
const Category = require('../models/Category');

// CONTROLLER FUNCTIONS
// index, show, store, update, destroy

module.exports = {

    async index(req, res){
        
        const categories = await Category.find();
        return res.json(categories);
    },

    async store(req, res){

        const { name, title, color, fillable, left, right }  = req.body;
  
        // const response = await axios.get(`https://api.github.com/users/${github_username}`);
        // const { name = login, avatar_url, bio } = response.data;
    
        category = await Category.create({
            name,
            title,
            color,
            fillable,
            left,
            right,
        });
    
        return res.json(category);
    },

    async fillable(req, res){

        const categories = await Category.find({
            fillable: true
        });
        return res.json(categories);
    }
}