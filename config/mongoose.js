import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DB_STRING, {
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