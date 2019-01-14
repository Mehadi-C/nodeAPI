module.exports = {
    createValues(req, res) {
        if (!req.body.value) {
            res.status(400).send();
        }
    },
    readValues(req, res) {
        res.send('Success');
    },
    updateValues(req, res) {
        
    },
    deleteValues(req, res) {

    }
}