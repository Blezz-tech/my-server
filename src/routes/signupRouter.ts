import { Router } from 'express';
const router = Router();


const signupController = require("../controllers/signupController");

router.post("/", signupController.post);

module.exports = router;
