const Category = require('../models/Category.model');

module.exports.categorysController = {
    addCategory: async(req, res) => {
        try {
            const { title } = req.body;
            const category = await Category.create({
                title: title
            })
            res.json(category);
        } catch (e) {
            console.log(e);
        }
    },
    getAllCategory: async(req, res) => {
        try  {
            const category = await Category.find();
            res,json(category);
        } catch (e) {
            console.log(e);
        }
    },
    getCategoryById: async(req, res) => {
        try {
            const category = Category.findById(req.params.id);
            res.json(category);
        } catch (e) {
            console.log(e);
        }
    }
}