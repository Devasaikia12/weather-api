import express, {
	Request,
	Response,
	NextFunction,
	ErrorRequestHandler,
} from 'express';

import createHttpError from 'http-errors';
import dotenv from 'dotenv';
import weather from './routes/weather';
import flight from './routes/flight';
if (process.env.NODE_ENV?.trim() == 'development') {
	dotenv.config({ path: process.cwd() + '/config/dev.env' });
} else if (process.env.NODE_ENV?.trim() == 'testing') {
	dotenv.config({ path: process.cwd() + '/config/test.env' });
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/weather', weather);
app.use('/flight', flight);

app.use('/', (req: Request, res: Response, next: NextFunction) => {
	next(new createHttpError.NotFound());
});

//error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		status: err.status,
		messsage: err.message,
	});
};

app.use(errorHandler);

export default app;
