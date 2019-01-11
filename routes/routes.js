const ValuesCrtl = require('../controllers/values_controller');

module.exports = function (app) {
    app.get('/test', ValuesCrtl.getTest);
};
