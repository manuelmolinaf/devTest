const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const snapshotsRoutes = require('./routes/snapshot.routes')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

const status = {
  mongoConnected:false,
  message:''
};


//middleware
app.use(cors({
  origin: '*'
}));
app.use(express.json())
app.use('/api', snapshotsRoutes);

//routes
app.get('/api/status', (req,res) =>{
  res.json(status);
})

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log('connected to database!');
  status.mongoConnected = true;
  status.message = 'connected to database!';
})
.catch( (error) =>{
  console.log(error);
  status.mongoConnected = false;
  status.message = error;
})

app.listen(port, () => console.log('server listening on port', port));