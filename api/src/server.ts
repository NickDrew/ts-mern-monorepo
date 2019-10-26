import dotenv from 'dotenv';
import buildApp from './app/';
import e from 'express';

dotenv.config();

const port = process.env.PORT || 3000;

buildApp()
    .then((app: e.Express): void => {
        app.listen(port, (): void => {
            //TODO: monitoring here
            console.log(`server started on port: ${port} in mode: ${process.env.NODE_ENV}`);
        });
    })
    .catch((reason: Error): void => {
        //TODO: monitoring here
        console.log(reason);
    });
