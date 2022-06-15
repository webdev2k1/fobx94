import express from "express";
const router = express.Router();
import { postRegister, postLogin } from "../Controllers/AuthController.js";

router.post("/register", postRegister);
router.post("/login", postLogin);

export default router;
