const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const mongoose = require("mongoose");

main().catch((err) => console.log(err));
66666;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/SignUp");
}

// Define mongoose schema
const formSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const Form = mongoose.model("UserDetails", formSchema);

//EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); //For serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set("view engine", "ejs"); //Set the template engine
app.set("views", path.join(__dirname, "views")); //Set the views directory

//ENDPOINT
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("index.ejs");
});
app.get("/suceess", (req, res) => {
  const params = {};
  res.status(200).render("sucees.ejs");
});

app.post("/signup", (req, res) => {
  var myData = new Form(req.body);
  myData
    .save()
    .then(() => {
        res.redirect("/suceess");
    })
    .catch(() => {
      res.status(404).send("Item was not saved to the database");
    });
});
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
