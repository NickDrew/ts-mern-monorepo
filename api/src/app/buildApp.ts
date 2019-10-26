import express, { Express } from 'express';
import loadModules from './loadModules';
import loadRoutes from './loadRoutes';

async function buildApp(): Promise<Express> {
    let app = express();
    app = loadModules(app);
    //If the app needs to initialise database connections, do so here
    app = loadRoutes(app);
    return app;
}

export default buildApp;
