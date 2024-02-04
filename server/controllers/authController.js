import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new userModel({
    username,
    password: hashedPassword,
    firstname,
    lastname,
  });
  try {
    const result = await user.save();
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
