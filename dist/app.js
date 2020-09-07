"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes_1 = require("./routes/userRoutes");
const mongoose = require("mongoose");
class App {
    // public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';
    constructor() {
        this.app = express();
        this.routePrv = new userRoutes_1.Routes();
        this.mongoUrl = 'mongodb://localhost/eatons';
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map