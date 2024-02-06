import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPostsTimeline,
  likePost,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();
router.post("/", createPost);
router.get("/get/:id", getPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.put("/like/:id", likePost);
router.get("/timeline/:id", getPostsTimeline);
export default router;
