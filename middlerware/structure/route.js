const express = require("express");
const app = express();
const {handleGetTodos} = require("./controller");
const {getAllValidator} = require("./valiadator");
const router = express.Router();

router.get("/",getAllValidator,handleGetTodos);

module.exports = router;