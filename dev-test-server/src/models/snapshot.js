const mongoose = require('mongoose');


const snapshotSchema = mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    instrument:{
        type:any,
        required: true
    },
    orderBook:{
        type:any,
        required: true
    }
});

module.exports = mongoose.model('Snapshot', snapshotSchema);
