"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const UserController_1 = require("../controllers/UserController");
class Routes {
    constructor() {
        this.usercontroller = new UserController_1.UserController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // Contact 
        app.route('/contact')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send('You shall not pass!');
            }
            else {
                next();
            }
        }, this.usercontroller.getUsers)
            // POST endpoint
            .post(this.usercontroller.addNewUser);
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.usercontroller.getUserWithID)
            .put(this.usercontroller.updateUser)
            .delete(this.usercontroller.deleteUser);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=userRoutes.js.map