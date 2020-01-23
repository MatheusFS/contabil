const Category = require('../../models/Category');

module.exports = async function makeCategoryTree(super_categories){

    const tree = [];

    for(const category of super_categories){

        const parent = await Category.findOne({ name: category });
        const childs = await Category.find({
            left: {
                $gt: parent.left
            },
            right: {
                $lt: parent.right
            }
        });

        tree.push({parent, childs});
    }

    return tree;
}