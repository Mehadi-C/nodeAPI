const ValuesCrtl = require('../controllers/values_controller');

module.exports = function (app) {
    app
     .get('/test', ValuesCrtl.readValues)
     .post('/test', ValuesCrtl.createValue)
     .post('/tests', ValuesCrtl.createValues)
     .put('/test', ValuesCrtl.updateValue)
     .delete('/test/:id', ValuesCrtl.deleteValue)
};
