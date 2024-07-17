const router = require("express").Router();
const User = require("../models/user");

router.post("/sign-in", async(req, res)=> {
    try {
        const { username, email } = req.body;
        const existingUser = await User.findOne({ username: username });
        const existingEmail = await User.findOne({ email: email });

        if (existingUser){
            return res.status(400).json({ message: "Username already exists"});
        } else if (username.length <= 3){
            return res.status(400).json({ message: "Username should be of atleast 4 characters"});
        }

        if (existingEmail){
            return res.status(400).json({ message: "Email already exists"});
        }
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        await newUser.save();
        return res.status(200).json({ message: "Signed Up Successfully!"});
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Internal Server Error"});
    }
});

module.exports = router;