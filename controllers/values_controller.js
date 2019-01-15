module.exports = {
    createValues(req, res) {
        console.log(req.body);
        res.send('Hello');
    },
    readValues(req, res) {
        res.send('Success');
    },
    updateValues(req, res) {
        
    },
    deleteValues(req, res) {

    }
}