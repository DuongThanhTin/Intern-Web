const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    category: [],

    price:{
        type: Number,
        require: true,
    },

    size: [],
    color: [],

    quantity:{
        type: Number,
        require: true,
    },
    images:[],
    
    description:{
        type: String,
        require: true,
    },
    create_at:{
        type: Date.now,
    }
})

const productMongoose = mongoose.model('product',productSchema);

module.exports = productMongoose;
