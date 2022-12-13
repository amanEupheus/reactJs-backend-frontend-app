
const {usertable} = require("../models")


const createUser = async(req,res) =>

{
    try{

        let {username, email, password} = req.body

        if(!username){
            return res.status(400).send({status: false, message: "Email is required"})
        }

        if(!email){
            return res.status(400).send({status: false, message: "Email is required"})
        }

        if(!password){
            return res.status(400).send({status: false, message: "password is required"})
        }

        let isEmail = await usertable.findOne({where:{email: email}})

        if(isEmail){
            return res.status(404).send({status: false, message: "Email already registered"})
        };

        let ispassword = await usertable.findOne({where:{password: password}})

        if(ispassword){
            return res.status(404).send({status: false, message: "password is already used"})
        };


        let data  = await usertable.create(req.body)

        return res.status(200).send({status: true, data: data})

    }catch(err){
         console.log(err);
         return res.status(500).send({status: false, Error: err.message})

    }
}

module.exports = {createUser}

