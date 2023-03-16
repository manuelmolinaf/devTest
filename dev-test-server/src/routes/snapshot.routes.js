const express = require('express');
const snapshotSchema = require('../models/snapshot')

const router = express.Router();

//save snapshot
router.post('/saveSnapshot', (req, res) =>{
    
    const snapshot = snapshotSchema(req.body);
    snapshot.save()
    .then((data)=> res.json(data))
    .catch((error) =>res.json({message: error}));
})

router.get('/snapshots', (req, res) =>{
    snapshotSchema.find()
    .then((data) => res.json(data))
    .catch((error) =>res.json({message: error}));
})

module.exports = router;