require('dotenv').config()

const mongoose = require('mongoose');
(express = require('express')), (app = express());

const port = 3000; //if server finds a port, use that port else use 3000

user = process.env.USERID // read from that env
pw = process.env.PW

uri = 'mongodb+srv://' + user + ':' + pw + '@clusterq2.jhtsftn.mongodb.net/Exams23001'

mongoose.connect(uri);

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  sid: { type: String, required: true },
});

// This Activitry creates the collection called activitimodels
const quizexamrecords = mongoose.model('Activity', activitySchema);

app.get('/', (req, res) => {
  const task1 = new quizexamrecords({
    name: 'Marco Janairo',
    sid: '300371108',
  });

  quizexamrecords.insertMany([task1]);

  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});