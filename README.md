
# Project Title

Weather api for app using typescript, express




## Installation

Clone or download the repository.
Install all the dependencies using the following command.
npm install
Run the application using the following command.
npm run start
Test the application using the following command.
npm run test
    
## API Reference

#### Get forecast weather

```http
  GET http://localhost:5000/weather/forecast/${location}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key & lcation |

#### Get current weather status

```http
  GET http://localhost:5000/weather/current/${location}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Your API key & location |

#### Get astronomy weather data

```http
  GET http://localhost:5000/weather/current/${location}/${date}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Your API key & location & date |


## API Used
https://www.weatherapi.com/api-explorer.aspx
## Appendix

Any additional information goes here

