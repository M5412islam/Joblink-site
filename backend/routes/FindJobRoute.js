const express = require("express");
const router = express.Router();
 const {search} = require("../controller/jobController");
router.use(express.json());



router.post("/", search);

module.exports = router;
