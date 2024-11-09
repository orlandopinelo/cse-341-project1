const mongodb = require('../data/database');
const ObjectID = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) =>{
    res.setHeader('Content-Type','application/json')
    res.status(200).json(contacts)

    })

}; 

const getSingleContact = async (req, res) => {
    const userid = new ObjectID(req.params.id)
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: userid});
    result.toArray().then((contacts) =>{
    res.setHeader('Content-Type','application/json')
    res.status(200).json(contacts[0])

    })
}

module.exports = {getAllContacts, getSingleContact};
