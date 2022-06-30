
const express = require('express')
const router = express.Router();
const userModel = require('../models/userSchema');

router.post("/registerUser",(req,res)=>{
    const user = new userModel(req.body);
    user.save((err,savedUser)=>{
        if(err){
            res.json(err)
        }else{
            res.json(savedUser)
        }
    })
})

// router.get("/getAllUsers",(req,res)=>{
//     userModel.find((err,users)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.json(users)
//         }
//     })
// })

// router.get("/getAllUsers",(req,res)=>{
//     userModel.findOne({_id : "62bd0c2bf8bfa756fdbb7c95" },(err,users)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.json(users)
//         }
//     })
// })

router.get("/getAllUsers",(req,res)=>{
    userModel.find((err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})

// router.get("/getAUser/:id",(req,res)=>{
//     userModel.find({_id : req.params.id}, (err,users)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.json(users)
//         }
//     })
// })

router.get("/getAUser/:id",(req,res)=>{
    userModel.find({_id : req.params.id}, (err,users)=>{
        if(err || !users){
            if(!users){
               return  res.status(404).json({Error : "no user found with this id "})
            }
           return res.json(err)
        }else{
          return res.json(users)
        }
    })
})

// router.put("/updateUser/:id",(req,res)=>{
//     userModel.updateOne({_id: req.params.id},req.body,(err,result)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.json(result);
//         }
//     })
// })

// router.put("/updateUser/:id",(req,res)=>{
//     userModel.updateOne({name : "rahul"},req.body,(err,result)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.json(result);
//         }
//     })
// })

router.put("/updateUser/:id",(req,res)=>{
    userModel.updateMany({name : "rahul"},req.body,(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result);
        }
    })
})

router.delete("/deleteUser/:id",(req,res)=>{
    userModel.deleteOne({_id:req.params.id},(err,user)=>{
        if(err){
            res.json(err);
        }else{
            res.json(user)
        }
    })
})


module.exports = router;