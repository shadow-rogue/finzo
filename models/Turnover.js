const mongoose = require("mongoose");

const TurnoverSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    year: {
        type: Number
    },
    amount: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Turnover = mongoose.model("turnover", TurnoverSchema);