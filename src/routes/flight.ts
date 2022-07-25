import express from 'express';
import { getFlightPrice } from '../service/flight';
const routes = express.Router();

routes.get('/compareFlight', getFlightPrice);

export default routes;
