const mongoose = require("mongoose");

const { MONGO_URL } = process.env;
//let dburi="mongodb+srv://sagini:wGddqSw88QCn8CY7@saginicluster.npt6r.mongodb.net/ecommerce?retryWrites=true&w=majority"

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};


/*
const connect = async () => {
  //connecting to the database
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Succesfully connected to database");
  } catch (error) {
    console.log("database connection failed.exiting now...");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connect;
*/
