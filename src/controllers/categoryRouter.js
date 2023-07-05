const axios = require("axios");
const url = process.env.JSON_SERVER_URL;

const getCategories = async (req, res) => {
    try {
        const categories = await axios.get(`${url}/category`);

        res.status(200).json({
            data: categories.data
        })
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
}

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        await axios.post(`${url}/category`, {
            name
        })

        res.status(200).send("Category successfully added")
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
}

module.exports = {
    getCategories,
    createCategory
}