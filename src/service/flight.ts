import { Request, Response } from 'express';
import axios from 'axios';

export const getFlightPrice = async () => {
	const options = {
		method: 'GET',
		url: 'https://compare-flight-prices.p.rapidapi.com/GetPricesAPI/GetPrices.aspx',
		headers: {
			'X-RapidAPI-Key': '2ddcfad09bmsh065e30d2728aba2p1b5f19jsn0ddb5dac515d',
			'X-RapidAPI-Host': 'compare-flight-prices.p.rapidapi.com',
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
};
