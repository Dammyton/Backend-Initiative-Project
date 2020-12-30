// get the JSON data array
let data = require('../databases/users');

const getUsers =  (req,res) => {
    res.status(200).json(data);
};

const getUserById = (req, res) => {
    // find a user from `data` array match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
};

const createNewUser =  (req, res) => {
    // get itemIds from data array
    let itemIds = data.map(item => item.id);

    // create new id (basically +1 of last item object)
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

    // create an object of new User
    let newItem = {
        id: newId,
        email: req.body.email, 
        password: req.body.password, 
        createdOn: new Date()
    };

    // push new user object to data array of users
    data.push(newItem);

    res.status(201).json(newItem);
};


const updateUser = (req, res) => {
    // get user matched by `id`
    let found = data.find( (item) => {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let updated = {
            id: found.id,
            email: req.body.email, 
            password: req.body.password,
        };

        // find index of found user from array of data
        let targetIndex = data.indexOf(found);

        // replace user from data list with `updated` object
        data.splice(targetIndex, 1, updated);

        res.status(200).json(updated);
    } else {
        res.sendStatus(404);
    }
};


const deleteUser = (req, res) => {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let targetIndex = data.indexOf(found);

        data.splice(targetIndex, 1);

        res.status(200).send("Deleted successfully");
    }

    // return with status 204
    res.sendStatus(204);
};

module.exports = { 
    getUsers, getUserById, createNewUser, updateUser, deleteUser
};