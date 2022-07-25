import express from 'express';
const routes = express.Router();
import { getForeCast, getAstronomy, current } from '../service/index';

routes.get('/forecast/:location?', getForeCast);
routes.get('/current/:location?', current);
routes.get('/astronomy/:location/:date?', getAstronomy);

export default routes;
