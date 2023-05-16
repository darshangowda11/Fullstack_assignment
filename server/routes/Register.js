const router = require("express").Router();
const {Register}=require("../controllers/Register")

router.route('/register').post(Register)
// router.post('/register', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log("data from frontend",req.body)
//     if (!email || !password) {
//       return res.status(400).json({ message: "Please enter all fields" });
//     }
//     await User.find({ email: email }).then((user) => {
//       if (user.length > 0)
//         return res.status(409).json({ msg: "User already exists" });
//     });
    

// //for hashing and storing passowrd securely for every new user
//     bcrypt.hash(password, 10, async (err, cryptedPassword) => {
    
//       const newUser = await User.create({
//         email: email,
//         password: cryptedPassword,
//       });
//       // res.send(newUser)
//       return res.status(201).json({
//         Status: "Success",
//         Message: newUser,
//       });
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "Failed",
//       Message: err,
//     });
//   }
// });

module.exports = router;
