import express from "express";
const router = express.Router();
import {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
  getTimelinePosts,
} from "../Controllers/PostController.js";

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/:id/timeline", getTimelinePosts);

export default router;
