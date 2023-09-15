import Query from "../model/query.js";

const getAllTea = async (req, res) => {

    const query = "SELECT tea.id, label_1, tea.url_image, tea.url_tea, category.label  FROM tea JOIN category ON tea.categorie_id = category.id";
    const [data] = await Query.find(query);
    res.status(200).json(data);

};

const getAllCategory = async (req, res) => {

    const query = "SELECT label, description, url_image FROM category";
    const [data] = await Query.find(query);
    res.json(data);

};

const getNew = async (req, res) => {

    const query = "SELECT label, description, url_image FROM category";
    const [data] = await Query.find(query);
    res.json(data);

};

const getBestseller = async (req, res) => {

    const query = "SELECT label, description, url_image FROM category";
    const [data] = await Query.find(query);
    res.json(data);

};

const getFavorite = async (req, res) => {

    const query = "SELECT id, label_1, description, url_image, url_tea FROM tea WHERE our_favorite = 1";
    const [data] = await Query.find(query);
    res.json(data);

};

export { getAllTea, getAllCategory, getNew, getBestseller, getFavorite };