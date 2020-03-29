require('dotenv').config()

import "reflect-metadata"; // this shim is required
import { createExpressServer, useContainer } from "routing-controllers"
import * as mongoose from 'mongoose'
import { factionJob } from './jobs/faction.job'
import { Container } from 'typedi'

useContainer(Container);

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [__dirname + "/controllers/*.ts"],
  middlewares: [__dirname + "/middlewares/*.ts"],
  interceptors: [__dirname + "/interceptors/*.ts"],
});

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true }).then(
  () => {
    console.log(`Succesfully connected to ${process.env.CONNECTION_URL}`)
    factionJob.start();
  },
  (err) => console.error("Connection error", err));

// run express application on port 3000
app.listen(5000);