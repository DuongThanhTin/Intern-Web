const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  product:[{

  }],
  user:{
      userId:{},
  }
});

module.exports = mongoose.model('Order', orderSchema);
