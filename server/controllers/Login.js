const bcrypt = require('bcrypt')
const User = require("../model/user")
const jwt = require("jsonwebtoken")
const secret = "officeSolution"
const Login= async(req,res)=>{
    try {
        const { email, password } = req.body;
        const findQueryinDB = await User.findOne({ email: email });
        console.log(req.body)

        if (!findQueryinDB) {
            return res.status(404).json({
                status: "Error",
                message: "User isn't register,please register before signin"
            });

        } else {
            //  for passwordvallidation
            console.log(req.body)

            //privacy
            bcrypt.compare(password, findQueryinDB.password, (err, result) => {
                //authentication process by bcrypt

                console.log(result, "from bcrypt")
                if (!result) {
                    return res.status(403).json({
                        status: "Failed",
                        message: "Invalid User Password"
                    })
                }
                else {
                    //after successfull login we have to authorize the user by sstoring token to the user cookies/local storage
                    const token = jwt.sign({
                        // 60 hours from the current time.
                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 60),
                        findQueryinDB: findQueryinDB._id
                    }, secret);

                    const userdetails = { ...findQueryinDB._doc, password: undefined }
                    return res.status(200).json({
                        status: "Success",
                        message: { token, userdetails }
                        //we are storing the token in the cookies
                    })
                }
            })

        }

    } catch (err) {
        console.log(err)
    }

}

module.exports={Login}