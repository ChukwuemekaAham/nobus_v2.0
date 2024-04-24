const mongoose = require("mongoose");

const DB_URL = process.env.NEXT_PUBLIC_DB_STRING?.toString() || "";

mongoose.set("strictQuery", false);

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!");
    console.log(err);
  });
  
  export { mongoose };