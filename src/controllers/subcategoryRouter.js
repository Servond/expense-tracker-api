const axios = require("axios");
const url = process.env.JSON_SERVER_URL;

const getSubcategories = async (req, res) => {
    try {
        const subcategory = await axios.get(`${url}/subcategory`);

        res.status(200).json({
            data: subcategory.data
        })
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
}

const createSubcategory = async (req, res) => {
    try {
        const { name } = req.body;
        await axios.post(`${url}/subcategory`, {
            name
        })

        res.status(200).send("Category successfully added")
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
}

module.exports = {
    getSubcategories,
    createSubcategory
}