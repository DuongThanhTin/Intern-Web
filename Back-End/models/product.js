const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    category: [],
    brand:[],
    size: [],
    color: [],
    price:{
        type: Number,
        require: true,
    },
    quantity:{
        type: Number,
        require: true,
    },
    images:{
        type: String,
        default: "/images/example-3.jpg",  
    },
    
    description:{
        type: String,
        require: true,
    },
    create_at:{
        type: Date,
        default: Date.now,
    }
})

const productMongoose = mongoose.model('product',ProductSchema);

module.exports = productMongoose;
