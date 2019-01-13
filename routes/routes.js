const ValuesCrtl = require('../controllers/values_controller');

module.exports = function (app) {
    app
     .get('/test', ValuesCrtl.readTest)
     .post('/test', ValuesCrtl.createTest)
     .put('/test/:id', ValuesCrtl.updateTest)
     .delete('/test/:id', ValuesCrtl.deleteTest)
};
