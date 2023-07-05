const express = require("express");
const router = express.Router();

const {
    getSubcategories,
    createSubcategory
} = require("../controllers/subcategoryRouter");

router.get("/subcategories", getSubcategories);
router.post("/subcategories", createSubcategory);

module.exports = router;