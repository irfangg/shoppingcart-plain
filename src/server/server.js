import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getAccess } from "./config";
const { google } = require("googleapis");

let port = 7777;
let app = express();

app.listen(port, console.log("server listening " + port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.get("/getLabels", (req, res) => {
  //console.log("req ", req.query);
  function getData(data) {
    //console.log('data',data);
    res.send(data.data.labels);
  }
  getAccess({ name: "labels" }, getData);
});

app.get("/getIDList", (req, res) => {
  let { id } = req.query;
  function getData(data) {
    //console.log('data',data);
    res.send(data);
  }
  getAccess({ name: "idList", id }, getData);
});
