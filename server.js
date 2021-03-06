const path = require("path");
const express = require("express");
const app = express(); // create express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/public'));
}
// Define API routes here
// Send every other request to the React app
// Define any API routes before this runs
app.use(express.static('./client/build/'));
app.use('/', express.static('./client/build/index.html'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
});
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/public", "index.html"));
// });
// var port = process.env.PORT || 8080;
// app.listen(port,function() {
//   console.log("app running on port 8080"); });
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
// start express server on port 5000
// app.listen(5000, () => {
//   console.log("server started on port 5000");
// });