const mongoose = require('mongoose');


const snapshotSchema = mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    instrument:{
        type:mongoose.Schema.Types.Mixed,
        required: true
    },
    orderBook:{
        type:mongoose.Schema.Types.Mixed,
        required: true
    }
});

module.exports = mongoose.model('Snapshot', snapshotSchema);
