const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});
const express = require("express");
const PORT = process.env.PORT || 8000;

const {
    expenseRouter
} = require("./Routers")

const app = express();
app.use(express.json());

app.use("/api/expense-management", expenseRouter);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})