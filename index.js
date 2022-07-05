require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// express static files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use('/database', express.static(path.join(__dirname, 'database')));

// check if time works
require("./database/Shipments");

// home page
app.get("/", function (req, res) {
	var page = "./routes/HomePage.html";
	res.render("index", {
		title: "Home Page",
		page: page
	});
});

// shipments page
app.get("/shipments", function (req, res) {
	var page = "./routes/ShipmentsPage.html";
	res.render("index", {
		title: "Shipments Page",
		page: page
	});
});

// create a new shipment form 'GET'
app.get("/shipments/create-new-shipment", function (req, res) {
	var page = "./forms/ShipmentsForm.html";
	res.render("index", {
		title: "Create Shipments",
		page: page
	});
});

// create a new shipment form 'POST'
app.post("/shipments/create-new-shipment", function (req, res) {
	var shipmentform = req.body;
	shipmentform = JSON.stringify(shipmentform);
	console.log("shipment data:\t" + shipmentform);
	// read body form data and create new shipment
});

// updates shipment form
app.post("/shipments/update-shipment/:id", function (req, res) {
	// read body form data and create new shipment
});

// deletes a shipment form
app.post("/shipments/delete-shipment/:id", function (req, res) {
	// read body form data and create new shipment
});

// logout
app.post("/logout", function (req, res) {
	// destroy session
});

const port = process.env.PORT || 3501;
app.listen(port, function () {
  console.log("Server is listening to port " + port);
});