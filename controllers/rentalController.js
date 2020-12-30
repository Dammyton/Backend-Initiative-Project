// get the JSON data array
let data = require('../databases/rentals.json');

const getRentals =  (req,res) => {
    res.status(200).json(data);
};

const getRentalById = (req, res) => {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
};

const createNewRental =  (req, res) => {
    let itemIds = data.map(item => item.id);

    // create new id (basically +1 of last item object)
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

    let newItem = {
        id: newId,
        type: req.body.type, 
        price: req.body.price, 
        duration: req.body.duration, 
        createdOn: new Date()
    };

    data.push(newItem);

    res.status(201).json(newItem);
};


const updateRental = (req, res) => {
    let found = data.find( (item) => {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let updated = {
            id: found.id,
            type: req.body.type, 
            price: req.body.price, 
            duration: req.body.duration, 
        };

        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1, updated);

        res.status(200).json(updated);
    } else {
        res.sendStatus(404);
    }
};


const deleteRental = (req, res) => {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1);

        res.status(200).send("Deleted successfully");
    }

    res.sendStatus(204);
};

module.exports = { 
    getRentals, getRentalById, createNewRental, updateRental, deleteRental
};