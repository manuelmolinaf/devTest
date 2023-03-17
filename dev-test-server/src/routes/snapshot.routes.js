const express = require('express');
const snapshotSchema = require('../models/snapshot')

const router = express.Router();

/**
 * Save Snapshot
 */
router.post('/saveSnapshot', (req, res) =>{
    
    const snapshot = snapshotSchema(req.body);
    snapshot.save()
    .then((data)=> res.json(data))
    .catch((error) =>res.json({message: error}));
})

/**
 * Get all snapshots
 */
router.get('/snapshots', (req, res) =>{
    snapshotSchema.find()
    .then((data) => res.json(data))
    .catch((error) =>res.json({message: error}));
})

/**
 * Get Snapshot by id
 */
router.get('/snapshot/:id', (req, res) =>{
    const {id} = req.params;

    snapshotSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) =>res.json({message: error}));
})

module.exports = router;