
const ProductModel = require('../models/product')
const mongoClient = require('mongodb').MongoClient;


module.exports={
    //Post    
    postImage: function(req,res,next){
        let imageUrl = req.body.image;
        if (req.file) {
          imageUrl = req.file.path;
        }
        if (!imageUrl) {
          const error = new Error('No file picked.');
          error.statusCode = 422;
          throw error;
        }
        console.log(imageUrl)
        res.json({
            url:imageUrl,
        })
    },
    
    postAddProduct: (req,res,next)=>{
            const {name, categories,brand,price,size,color,quantity,description} = req.body;
                const productData = new ProductModel({
                    name: name,
                    category: categories,
                    brand: brand,
                    price: price,
                    size: size,
                    color: color,
                    quantity: quantity,
                    description: description,
                })
        return productData.save()
        .then(result=>{
            console.log('Save Done')
            res.json({
                complete: true,
            })
            
        })
        .catch(function(err){
            console.log("TCL: ", err);
        })
    },

    getListProduct: (req,res,next)=>{
        mongoClient.connect('mongodb+srv://admin:admin@cluster0-pces2.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}, function(err, db) {
            if (err) throw err;
         
            //Important Connect Data
            var ProductsData = db.db("test").collection("products");
            ProductsData.find({}).toArray(function (err,data) {
                res.json({
                    listproducts: data
                })
            })
       
            db.close();
        });
        
    }
}

