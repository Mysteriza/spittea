const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

// Logic for Following

// Create users
const createNewUser = asyncHandler(async (req, res) => {
  const { username, firstname, lastname, email, password, confirmPassword } =
    req.body;
  // Checking all important variables are available
  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({ message: "Important fields are missing!" });
  }
  // check duplicate
  const duplicate = await User.findOne({ email }).lean().exec();
  if (duplicate) {
    return res.status(400).json({ message: "Email already exist!" });
  }
  // Hashing the password (encrypt)
  const hashedPassword = await bcrypt.hash(password, 10);

  const userObject = {
    username: firstname + lastname,
    firstname,
    lastname,
    email,
    password: hashedPassword,
  };
  const user = await User.create(userObject);

  if (user) {
    return res.status(200).json({ message: "New user create successfully!" });
  } else {
    return res.status(400).json({ message: "Something went wrong!" });
  }
});

// Get all users

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "There are no users!" });
  }
  res.json(users);
});

// Edit user

// Delete user

// View user

module.exports = { createNewUser, getAllUsers };
