const express = require("express");
const app = express();
const router = express.Router();
var PORT = 3000;
app.use(express.json());
const blogRoutes = require('./routes/blogRoutes') 
app.use('/blog',blogRoutes);
require('./db/connection')
//Write missing code here and all the CRUD operations on the database




app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
