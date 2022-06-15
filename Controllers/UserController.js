import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id).select("-password -__v");
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(403).json("user does not exist");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  UPDATE USER
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id == currentUserId || currentUserAdminStatus) {
    try {
      // check if user update password
      if (password) {
        req.body.password = bcrypt.hashSync(password, 10);
      }

      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(403).json({ message: "can not update user !!!" });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;

  if (id == currentUserId || currentUserAdminStatus) {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(id);
      if (deletedUser) {
        res.status(200).json("User has been deleted !!");
      } else {
        res.status(403).json({ message: "user id is invalid" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(403).json({ message: "can not delete user !!!" });
  }
};

// FOLLOW USER
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;

  // can not follow your self
  if (id == currentUserId) {
    res.status(403).json("Can not follow yourself");
  } else {
    try {
      const followerUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      // adding validate user , do this later

      // checking is following or not
      if (!followerUser.followers.includes(currentUserId)) {
        //add new people who follow
        await followerUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!!");
      } else {
        res.status(403).json("You already followed this user!!");
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

// UNFOLLOW USER
export const unFollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;

  // can not follow your self
  if (id == currentUserId) {
    res.status(403).json("Action fobidden");
  } else {
    try {
      const followerUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      // adding validate user , do this later

      // checking is following or not
      if (followerUser.followers.includes(currentUserId)) {
        //add new people who follow
        await followerUser.updateOne({ $pull: { followers: currentUserId } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("User unfollowed!!");
      } else {
        res.status(403).json("You are not followed this user!!");
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
