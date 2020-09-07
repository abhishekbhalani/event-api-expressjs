
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/userRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/eatons';  
    // public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

    constructor() {
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
      //  mongoose.connect(this.mongoUrl, { useNewUrlParser: true });

        mongoose.connect(this.mongoUrl, { useNewUrlParser: true }).then(() => {
            console.log("Connected to Database");
        }).catch((err) => {
            console.log("Not Connected to Database ERROR! ", err);
        });

    } 

}

export default new App().app;
