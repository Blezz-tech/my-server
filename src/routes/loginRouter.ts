import { Router } from 'express';
const router = Router();

const loginController = require("../controllers/loginController");

router.post("/", loginController.post);

module.exports = router;
