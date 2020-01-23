const makeCategoryTree = require('./utils/makeCategoryTree');

// CONTROLLER FUNCTIONS
// index, show, store, update, destroy

module.exports = {

    async index(req, res) {

        const super_categories = [
            'ROB', 
            'DROB', 
            'CO', 
            'DO', 
            'RFL', 
            'CJS', 
            'RNO',
            'AED'
        ];

        const tree = await makeCategoryTree(super_categories);

        return res.json(tree);
    },
}