import { Router } from "express";
const router = Router();
import { getUser, register, login } from "../controllers/userControllers.js";

router.get("/user", getUser);
router.post("/register", register);
router.post("/login", login);

export default router;
