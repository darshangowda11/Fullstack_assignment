const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGODB_URI || "mongodb+srv://darshanrgs45:darshanrgs45@cluster0.phsbb9v.mongodb.net/office-Solution?retryWrites=true&w=majority", connectionParams)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection; // Get the connection object

module.exports = db;
