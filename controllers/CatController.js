const Cat = requires('../models/Cats');

exports.getAllCats = async (req, res) => {
    const cats = await Cat.find();
    res.json(cats);
};

exports.createCat = async (req, res) => {
    const newCat = await Cat.create(req.body);
    res.status(201).json(newCat);
};

