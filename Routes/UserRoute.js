import express from "express";
const router = express.Router();
import {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unFollowUser,
} from "../Controllers/UserController.js";

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unFollowUser);

export default router;
