const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title: String,
    news = {
        ref: 'News',
        type: mongoose.SchemaTypes.ObjectId,
    }

})

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;