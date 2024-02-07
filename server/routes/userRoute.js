import express from "express";
import {
  deleteUser,
  followUser,
  getUser,
  unfollowUser,
  updateUser,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();
router.get("/", getAllUsers);
router.get("/get/:id", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.put("/follow/:id", followUser);
router.put("/unfollow/:id", unfollowUser);
export default router;
