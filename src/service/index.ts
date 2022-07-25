import { Request, Response } from 'express';
import axios from 'axios';
const url = `http://api.weatherapi.com/v1/`;
export const getForeCast = async (req: Request, res: Response) => {
	const { location } = req.params;
	if (typeof location == 'undefined') {
		return res.status(409).send('Location not found');
	}
	const url_part = `forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}`;
	try {
		const { data } = await axios.get(url + url_part);
		const { location, current } = data;

		res.json({
			Place: location.name,
			Region: location.region,
			latitude: location.lat,
			longitude: location.lon,
			temperature_c: current.temp_c,
			temperature_f: current.temp_f,
		});
	} catch (error: any) {
		res.send(error.message);
	}
};

export const current = async (req: Request, res: Response) => {
	const location = req.params.location;

	if (typeof location == 'undefined') {
		return res.status(409).send('location not found');
	}
	try {
		const data = await getlocation(location);
		res.json({
			Place: data.name,
			Region: data.region,
			latitude: data.lat,
			longitude: data.lon,
			temperature_c: data.temp_c,
			temperature_f: data.temp_f,
		});
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

export const getlocation = async (loc: string) => {
	const url_part = `current.json?key=${process.env.WEATHER_API_KEY}&q=${loc}`;

	const response = await axios.get(url + url_part);
	if (response.status != 200) {
		throw new Error(response.statusText);
	}
	const { location, current } = response.data;
	return { ...location, ...current };
};

export const getAstronomy = async (req: Request, res: Response) => {
	const { location, date } = req.params;

	let curdate = '';
	if (typeof date == 'undefined') {
		let cdate = new Date();
		let month = (cdate.getMonth() < 9 ? '0' : '') + (cdate.getMonth() + 1);
		curdate = [cdate.getFullYear(), month, cdate.getDate()].join('-');
	} else {
		curdate = date;
	}

	const url_part = `astronomy.json?key=${process.env.WEATHER_API_KEY}&q=${location}&dt=${curdate}`;
	try {
		const result = await axios.get(url + url_part);
		console.log(result);
		const {
			location,
			astronomy: { astro },
		} = result.data;
		res.json({ ...location, ...astro });
	} catch (error: any) {
		res.json({ error: error.message });
	}
};
