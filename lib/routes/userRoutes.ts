import { Request, Response, NextFunction } from "express";
import { UserController } from "../controllers/UserController"; 

export class Routes {

    public usercontroller: UserController = new UserController()

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })

        // Contact 
        app.route('/users')
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                     res.status(401).send('You shall not pass!');
                } else {
                    next();
                }
            }, this.usercontroller.getUsers)

            // POST endpoint
            .post(this.usercontroller.addNewUser);

        // Contact detail
        app.route('/users/:userId')
            // get specific contact
            .get(this.usercontroller.getUserWithID)
            .put(this.usercontroller.updateUser)
        .delete(this.usercontroller.deleteUser  )

    }
}
