const express = require("express");
const router = express.Router();
 const {searchdatabyUsername} = require("../controller/jobController");
router.use(express.json());

router.post("/",searchdatabyUsername);

module.exports = router;
