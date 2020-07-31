const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser
} = require("../controllers/users");

//get all the users
router.get("/", getUsers);

//create user
router.post("/", createUser);

//delete user
router.delete("/:id", deleteUser);

//update user
router.patch("/:id", updateUser);

module.exports = router;
