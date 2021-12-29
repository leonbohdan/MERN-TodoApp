const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;
const PASSWORD = process.env.PASSWORD || 'iU9trSKtPESuTuR';
const NAME = process.env.NAME || 'lbwkm';

const uri = `mongodb+srv://${NAME}:${PASSWORD}@cluster0.mwniv.mongodb.net/todos?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function startServer() {
  try {
    await mongoose.connect(uri, options);

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
}

startServer();
