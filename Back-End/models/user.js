const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role:{
        type: String,
        default:"customer",
    },
    cart:{
        items:[{
            productId:{
                type: Schema.Types.ObjectId,
                ref: 'Product',
                require: true,
            },
            quantity: Number,
        }],
        sum: {
            type: Number,
            default: 0
        }
      },

});

const userMongoose = mongoose.model('user',UserSchema);

module.exports = userMongoose;