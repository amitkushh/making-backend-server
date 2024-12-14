import express from "express";
import { Home, Login} from '../controllers/authController.js'

const router = express.Router();

router.get("/", Home);
router.get('/login', Login);

export default router;
