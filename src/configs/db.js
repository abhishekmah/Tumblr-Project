const mongoose = require('mongoose');
const connect = mongoose.connect(`mongodb://127.0.0.1:27017/tumblr_data`);

module.exports = connect;


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://abhishek:<password>@firstcluster.eouui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
