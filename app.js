const express = require("express");
const cors = require("cors");
const hbs = require("hbs");
const productRouter = require("./routes/productRoutes");
const PORT = 4000;
const connectDatabase = require("./database/connection");

const app = express();
connectDatabase();

app.use(cors());
app.use(express.json()); //required to access json data in POST function

//setup view engine
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/partials");

//Use routes
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
