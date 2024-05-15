const express = require("express");
const router = express.Router();
 const {search,getAlldata} = require("../controller/jobController");
router.use(express.json());



router.post("/", search);
router.get("/",getAlldata);
module.exports = router;
