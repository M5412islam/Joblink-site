const express = require("express");
const router = express.Router();
const {create} = require("../controller/jobController");

router.use(express.json());

router.post("/", create);

module.exports = router;
