const ValuesCrtl = require('../controllers/values_controller');

module.exports = function (app) {
    app
     .get('/test', ValuesCrtl.readValues)
     .post('/test', ValuesCrtl.createValues)
     .put('/test/:id', ValuesCrtl.updateValues)
     .delete('/test/:id', ValuesCrtl.deleteValues)
};
