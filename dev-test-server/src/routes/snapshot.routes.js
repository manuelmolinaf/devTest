const express = require('express');
const snapshotSchema = require('../models/snapshot')

const router = express.Router();

//save snapshot
router.post('/saveSnapshot', (req, res) =>{
    const snapshot = snapshotSchema(req.body);
    snapshot.save()
    .then(()=> res.json(data))
    .catch((error) =>res.json({message: error}));
})

module.exports = router;