const router = require("express").Router();
const User = require("../models/User");


const abc = {
  username: "sakib",
  email: "sakib@gmail.com",
  password: "123456"
}
//Register
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.post("/register", async (req, res) => {
//   try {
//     const newUser = new User({
//       username: abc.username,
//       email: abc.email,
//       password: abc.password,
//     });

//     const user = await newUser.save();
//     console.log(user);
//     res.json(user);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//Login

module.exports = router;
