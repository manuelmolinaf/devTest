const express = require('express');
const mongoose = require('mongoose');
const snapshotsRoutes = require('./routes/snapshot.routes')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api', snapshotsRoutes);

//routes
app.get('/', (req,res) =>{
  res.send('welcome');
})

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('connected to database!'))
.catch( (error) => console.log(error))

app.listen(port, () => console.log('server listening on port', port));