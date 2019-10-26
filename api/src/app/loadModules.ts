import { Express } from 'express';
import bodyParser from 'body-parser';

const loadModules = (app: Express): Express => {
    app.use(bodyParser.urlencoded({ extended: true }));

    return app;
};

export default loadModules;
