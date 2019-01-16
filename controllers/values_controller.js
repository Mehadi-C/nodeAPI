const mongoose = require('mongoose');
const ValueSchema = require('../models/value');

module.exports = {
    createValues(req, res) {
        var Value = mongoose.model('Value', ValueSchema);

        Value.create({ id: req.body.id, title: req.body.title }, function (err) {
            if (err) return handleError(err);
          });

        res.status(200).send();
    },
    readValues(req, res) {
        res.send('Success');
    },
    updateValues(req, res) {
        
    },
    deleteValues(req, res) {

    }
}