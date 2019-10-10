const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
const UserModel = require('../models/user')



module.exports={
    
    getTest:(req,res,next)=>{
       res.json({sayHi:'Hello from server'})
    },

    //-------Sign Up---------
    //Get
    getSignUp: function(req,res,next){
        res.render('index', { title: 'Express' });
    },

    //Post    
    postSignUp: function(req,res,next){
        const {email, username, password } = req.body;
        console.log("TCL: {email, username, password }", {email, username, password })

        UserModel.findOne({
                username: username         
        })
        /* */
        //Render Signup nếu sai
        .then(function(user){
        console.log("TCL: user", user)
            if(user){
                console.log('Error Same')
            }
            if(req.body.username ==''){
                console.log('Error Empty')
            }
            if(req.body.password.length<6){
                console.log('Error no long')
            }

            //Mã hóa password với bcrypt
            return bcrypt
                .hash(password,12)
                .then(function(hashpassword){
                    const userData = new UserModel({
                        email:email,
                        username: username,
                        password: hashpassword,
                    });
                    return userData.save({
                        alo: console.log('Save Done'),
                       
                    })
                    
                })
        })
  
        .catch(function(err){
            console.log("TCL: err", err)
            res.send('error: '+ err)
        })
    },


}
