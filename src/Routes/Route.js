const router = require("express").Router();
const { route } = require("../App");
// const { findOne } = require("../Model/Register");
const User = require("../Model/Register");
const TODOS = require('../Model/Todos');


router.post('/register', async (req,res)=>{
    try {
        const result = await User.create({
            UserName:req.body.UserName,
            Password:req.body.Password
        })

        res.json({
            status:"ok",
            result
        })
    } catch (error) {
        res.json({
            status:"Failed",
            message:error.message
        })
    }
})

router.post('/login', async (req,res) => {
    try {
        const uname = await User.findOne({UserName:req.body.UserName});
        if(uname.Password == req.body.Password){
            res.json({
                status:"ok",
                uname,
            })
        } else {
            res.json({
                status:"Failed",
                message:"Wrong Password"
            })
        }
       
    } catch (error) {
        res.json({
            status:"user not valid"
        })
    }
})

router.post('/todos', async (req,res) => {
    try {
        const usertodo = await TODOS.create({
            Activity:req.body.Activity,
            Status:req.body.Status,
        }) 
        res.json({
            status:"done",
            usertodo,
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed to create Todo",
        })
    }
})

router.get('/todos', async (req,res) => {
    try {
        const usertodo = await TODOS.find();
        res.json(usertodo,)
    } catch (error) {
        res.status(500).json({
            status:"Failed to create Todo",
        })
    }
})

module.exports = router