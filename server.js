require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());

