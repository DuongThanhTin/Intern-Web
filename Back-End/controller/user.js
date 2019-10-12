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
        console.log("TCL Signup: email, username, password", email, username, password)
    
        UserModel.findOne({
                username: username         
        })
        /* */
        .then((user)=>{
            if(!user){
                //Mã hóa password với bcrypt
                return bcrypt
                    .hash(password,12)
                    .then(function(hashpassword){
                        const userData = new UserModel({
                            email:email,
                            username: username,
                            password: hashpassword,
                        });
                        res.json({
                            error: true,
                        })
                        return userData.save({
                            result: console.log('Save Done'),   
                        })
                    })
            }
            else{
                res.json({
                    errorUsername: 'Please enter a valid name',
                    errorEmail: 'Please enter a valid e-mail',
                    errorPassword: 'Your passwords must be more than 6 characters!', 
                    error: false,
                })
            }
        })
  
        .catch((err)=>{
            console.log("TCL: err", err)
            res.send('error: '+ err)
        })
    },

    //-------Login---------
    //Get
    getLogin:(req,res,next)=>{
        res.render('index', { title: 'Express' });
    },

    //Post    
    postLogin:(req,res,next)=>{
        const {email,username,password}=req.body
        UserModel.findOne({
            email: email
        })
        .then(function(user){
            if(!user)
            {
              res.json({
                  error:false,
              })
            }
            else{
                bcrypt.compare(password,user.password,(err,result)=>{
                    if(result)
                    {
                        res.json({
                            success: console.log('Success'),
                            info: console.log("TCL Login: email,username,password", email,username,password),
                            error: true,
                        })
                   
                    }
                    else
                    {
                       res.json({
                           error: false, 
                       })
                    }
                })
            }
        })
    },

    //-------Fogot Password---------
    //Get
    getFogotPassword:(req,res,next)=>{
        res.render('index', { title: 'Express' });
    },

     //Post
     postFogotPassword:(req,res,next)=>{
       
    },

        //-------Profile---------
    //Get
    getProfile:(req,res,next)=>{
        res.render('index', { title: 'Express' });
    },

    //Edit Profile
    getEditProfile:(req,res,next)=>{
        res.render('index', { title: 'Express' });
    },

    //Post
    postEditProfile:(req,res,next)=>{
        const {email,username}=req.body
        const userID= req.body._id;
        UserModel.findById(userID)
        .then(function(user){
            if(!user)
            {
              res.json({
                  error:"Fail"
              })
            }
            else{
                user.email = email;
                user.username = username;
                console.log("TCL: user", user)
                return user.save();         
            }    
        })
        .then(function(result){
            console.log("Complete Updated Completed user!");
            res.json({
                success:'success'
            })
            
        })
        .catch(function(err){
            console.log("TCL: ", err);
        })
    },

     //Change Password
     getChangePassord:(req,res,next)=>{
        res.render('index', { title: 'Express' });
    },

    //Post
    postChangePassword:(req,res,next)=>{
 
        const  {password,email, newpassword }=req.body
        console.log("TCL: password", password)
        console.log("TCL: newpassword", newpassword)      

        UserModel.findOne({
            email: email
        })
        .then(function(user){
            if(!user)
            {
              res.json({
                  error:"Fail"
              })
            }
            else{
                bcrypt.compare(password,user.password,(err,result)=>{
                console.log("TCL: result", result)
                    if(result)
                    {              
                        return bcrypt
                        .hash(newpassword,12)
                        .then((hashpassword)=>{
                            user.password = hashpassword;
                            console.log("TCL: newpassword", newpassword)
                            console.log("TCL: password", password)
                            res.json({
                                success: console.log('Success'),
                            })
                            return user.save();   
                        })
            
                    }
                    else
                    {
                       res.json({
                           error: 'error', 
                       })
                    }
                })
            }
        })

        .catch(function(err){
            console.log("TCL: ", err);
        })
    },
}
