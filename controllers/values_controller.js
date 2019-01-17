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
        var Value = mongoose.model('Value', ValueSchema);

        Value.find({})
            .then(values => res.send(values));
    },
    updateValues(req, res) {
        var Value = mongoose.model('Value', ValueSchema);
        
        Value.findOneAndUpdate({ id: req.body.id }, { title: req.body.title })
        .then(() => Value.findOne({
            id: req.body.id
          }))
          .then(updatedDocument => res.send(updatedDocument));
    },
    deleteValues(req, res) {

    }
}