const express = require("express");
const router = express.Router();

const {
    getCategories,
    createCategory
} = require("../controllers/categoryRouter");

router.get("/categories", getCategories);
router.post("/categories", createCategory);

module.exports = router;