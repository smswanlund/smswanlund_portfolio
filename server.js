const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes")
const path = require("path");


  app.use(express.json());
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
  }
  app.use("/",routes)
  const frontend = path.join(__dirname, 'build');


  app.use('/projects', express.static(frontend));
  app.use('/contact', express.static(frontend));


  app.use(express.urlencoded({ extended: true }));
app.listen(PORT, function(){
    console.log(`Now listening on ${PORT}`)
})