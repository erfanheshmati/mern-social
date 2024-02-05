import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  const newUser = new userModel(req.body);
  const { username } = req.body;
  try {
    const oldUser = await userModel.findOne({ username });
    if (oldUser) {
      return res.status(400).json("This username is already registered!");
    }
    const result = await newUser.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json(user)
        : res.status(400).json({ message: "Wrong Password" });
    } else {
      res.status(404).json({ message: "User does not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
