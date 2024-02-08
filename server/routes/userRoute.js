import express from "express";
import {
  deleteUser,
  followUser,
  getUser,
  unfollowUser,
  updateUser,
  getAllUsers,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
router.get("/", getAllUsers);
router.get("/get/:id", getUser);
router.put("/update/:id", authMiddleware, updateUser);
router.delete("/delete/:id", authMiddleware, deleteUser);
router.put("/follow/:id", authMiddleware, followUser);
router.put("/unfollow/:id", authMiddleware, unfollowUser);
export default router;
