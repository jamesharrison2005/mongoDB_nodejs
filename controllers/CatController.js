const Cat = require('../models/Cats');

exports.getAllCats = async (req, res) => {
    const cats = await Cat.find();
    res.json(cats);
};

exports.createCat = async (req, res) => {
    const newCat = await Cat.create(req.body);
    res.status(201).json(newCat);
};

exports.getCatById = async (req, res) => {
    try {
        const cat = await Cat.findById(req.params.id);
        if (!cat) {
            return res.status(404).send({ message: "Cat not found" });
        }
        res.json(cat);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteCat = async (req, res) => {
    try{
        const deletedCat = await Cat.findByIdAndDelete(req.params.id);
        if (!deletedCat){return res.status(404).send({message: "Cat not found"})};
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }  
};