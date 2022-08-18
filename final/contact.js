/**
 * To run this web server:
 *
 * - Create a directory for your all your files
 * - Copy server.js and index.html into this directory
 * - Inside this directory, run `npm install express`
 * - Run the web server: `node server`
 */

// We'll use the Express web framework for node.js, see https://expressjs.com/
const express = require("express");

// Create an instance of an Express Application
const app = express();

// Setup the form parsing we'll need to read submissions in requests
app.use(express.urlencoded());

// Our server will listen on port 8765 (e.g., http://localhost:8765)
const port = 8765;

// Allow a form to be submitted via a POST request to /submit-form
app.post("/submit-form", function handleFormPostRequest(req, res) {
  // The form's name/value pairs are available in the body of the request.
  // Log them to the console so we can see what was submitted
  console.log("Received POST to /submit-form");
  console.log(req.body);
  // Let the user know we've received their form
  res.send("Form Submitted Successfully via POST!");
});

// We'll serve index.html from the same directory as this file.
app.get("/", function serveIndexPage(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

// Start our web server, and log a message when it's running and accepting requests.
app.listen(port, function () {
  console.log(`Web server listening at http://localhost:${port}/`);
});
