const mongoose = require("mongoose");

const Basic_InfoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    company_name:{
        type: String,
        required: true
    },
    inc_date:{
        type: Date,
        required: true,
    },
    pending_date:{
        type: Date,
        required: true
    },
    gstn_status:{
        type: Boolean,
    },
    gstn: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Basic_info = mongoose.model("basic_info", Basic_InfoSchema);