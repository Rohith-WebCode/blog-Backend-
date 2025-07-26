const user = require('../model/userSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser  =async (req,res)=>{

    const {name,email,password} =req.body;

    try {
        const userExists =await user.findOne({email})
        if(userExists) return res.status(400).json({ msg: "User already exists" });

        const  hashedPassword  =await bcrypt.hash(password,10)

        const newUser = new user({
            name,
            email,
            password : hashedPassword
        })
        await newUser.save()
        res.status(200).json({ success: true, msg: "User created successfully", data: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Server error' });
    }
}

const loginUser = async (req,res)=>{

    const {email,password} = req.body;

    try {
        const User = await user.findOne({email})
        if(!User) return res.status(400).json({ msg: "Invalid credentials" });
        const isMatch =await bcrypt.compare(password,User.password)

        if(!isMatch) return res.status(400).json({mag:"Invalid credentials"})

            const token = jwt.sign({id:User._id},process.env.TOKEN_SECRET,{
                expiresIn:"7d"
            })

    res.status(200).json({ success: true, msg: "User login successfully", token });
        
    } catch (error) {
         console.error(error);
        res.status(500).json({ success: false, msg: 'Server error' });
    }
    

}
module.exports = {registerUser,loginUser }