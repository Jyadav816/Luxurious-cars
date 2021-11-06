const express = require("express");
const router = express.Router();
const User = require("../models/uDiag")

router.post("/login", async(req, res) => {

    const {username , password} = req.body

    try {
        const user = await User.findOne({username , password})
        if(user) {
            res.send(user)
        }
        else{
            return res.status(400).json(error);
        }
    } catch (error) {
      return res.status(400).json(error);
    }

});

router.post("/signup", async(req, res) => {
    const {username , password} = req.body
    try {
      const newuser = new User(req.body)
      await newuser.save()
      res.send('User registered successfully')
    } catch (error) {
        return res.status(400).json(error);
    }

});


module.exports = router






/*
router.post("/signup", async (req, res) => {
    try {
      const nu = new User(req.body)
      await nu.save()
      res.send("User has registered successfully")
    } catch (error) {
      return res.status(400).json(error);
    }
  });





router.post("/login", async (req, res) => {
    const {username, password} = req.body
    try {
      const u = await User.findOne({username, password});
      if(u) {
        res.send(u);
      }
      else {
        return res.status(400).json(error);
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  module.exports = router*/