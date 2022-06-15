import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// CREATE NEW USER
export const postRegister = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new UserModel({
    username,
    password: hashedPassword,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
export const postLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      const matchPassword = bcrypt.compareSync(password, user.password);

      if (matchPassword) {
        res.status(200).json(user);
      } else {
        res.status(400).json("Wrong password !!!");
      }
    } else {
      return res.status(400).json("Wrong username !!!");
    }
  } catch (err) {}
};
