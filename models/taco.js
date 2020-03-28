var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tacoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [String],
    tasty: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
}
);

module.exports = mongoose.model('Taco', tacoSchema);