import { Request, Response } from 'express';
import { getAstronomy } from '../index';
import request from 'supertest';
import axios from 'axios';
jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('mock test for weather api', () => {
	test('it should return current weather status', async () => {
		let req: any = {
			params: {
				location: 'Bangalore',
			},
		};
		let responseData = {};
		const res: Partial<Response> = {
			json: jest.fn().mockImplementation((result) => {
				responseData = result;
			}),
		};

		const data = mockAxios.get.mockResolvedValue({
			data: {
				location: {
					name: 'Bangalore',
					region: 'Karnataka',
					country: 'India',
					lat: 12.98,
					lon: 77.58,
					tz_id: 'Asia/Kolkata',
					localtime_epoch: 1658746119,
					localtime: '2022-07-25 16:18',
				},
				astronomy: { astro: [Array] },
			},
		});
		console.log(responseData);

		await getAstronomy(req as Request, res as Response);
		expect(responseData).toEqual(data);
	});
});
