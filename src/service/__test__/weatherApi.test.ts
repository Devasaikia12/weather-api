import request from 'supertest';
import app from '../../app';

describe('Test cases for weather api', () => {
	describe('Weather forecast api routes testing', () => {
		test('should return status 404 if location not passed', async () => {
			const response = await request(app).get('/weather/forecast/');
			expect(response.statusCode).toBe(409);
		});

		test('should return status 200', async () => {
			const location = 'bangalore';
			const res = await request(app).get(`/weather/forecast/${location}`);
			expect(res.statusCode).toBe(200);
		});
	});

	// current weather api test
	describe('Weather current api routes testing', () => {
		test('should return status 409 if location not passed', async () => {
			const response = await request(app).get('/weather/current/');
			expect(response.statusCode).toBe(409);
		});

		test('should return status 200', async () => {
			const res = await request(app).get(`/weather/forecast/guwahati`);
			expect(res.statusCode).toBe(200);
		});
	});
});
