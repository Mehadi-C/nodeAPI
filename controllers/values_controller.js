const ValueModel = require('../models/value');

module.exports = {
    createValue(req, res) {
        ValueModel.create({ id: req.body.id, title: req.body.title }, function (err) {
            if (err) return res.status(400).json(err);
          }, function () {
              res.sendStatus(200);
          });
    },

    createValues(req, res) {
        ValueModel.insertMany(req.body, function(err) {
            if (err) return res.status(400).json(err);
        });
    },

    readValues(req, res) {
        ValueModel.find({})
            .then(values => res.send(values));
    },

    updateValue(req, res) {
        ValueModel.findOneAndUpdate({ id: req.body.id }, { title: req.body.title })
                .then(() => Value.findOne({
                        id: req.body.id
                    }))
                    .then(updatedDocument => res.send(updatedDocument));
    },

    deleteValue(req, res) {
        ValueModel.remove({ id: req.params.id })
            .then(() => res.status(204).send())
            
    }
}