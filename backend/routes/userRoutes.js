const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//signin 
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

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        });

        await newUser.save();
        return res.status(200).json({ message: "Signed Up Successfully!"});
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Internal Server Error"});
    }
});

//login
router.get("/log-in", async(req, res)=> {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (!existingUser){
        return res.status(400).json({ message: "Invalid Credentials!"});
    }
    bcrypt.compare(password, existingUser.password, (err, data)=>{
        if (data){
            const authClaims = [{ name: username}, { jti: jwt.sign({}, "crukTM") }];
            const token = jwt.sign({ authClaims }, "crukTM", {expiresIn: "30m"});
            res.status(200).json({ id: existingUser._id, token: token});
        } else{
            return res.status(400).json({ message: "Invalid Credentials! "});
        }
    })
})

module.exports = router;