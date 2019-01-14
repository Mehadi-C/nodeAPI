const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ValueSchema = new Schema({
    id: String,
    title: String
});

module.exports = ValueSchema;
