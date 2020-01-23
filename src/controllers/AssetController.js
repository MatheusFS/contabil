// const axios = require('axios');
const Asset = require('../models/Asset');

// CONTROLLER FUNCTIONS
// index, show, store, update, destroy

module.exports = {

    async index(req, res){
        
        const assets = await Asset.find();
        return res.json(assets);
    },

    async store(req, res){

        const { name, value, start_date, lifetime_in_months }  = req.body;
  
        // const response = await axios.get(`https://api.github.com/users/${github_username}`);
        // const { name = login, avatar_url, bio } = response.data;
    
        asset = await Asset.create({
            name,
            value,
            start_date,
            lifetime_in_months,
        });
    
        return res.json(asset);
    }
}