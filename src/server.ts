import app from './app';
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`App is connected on port ${PORT}`);
});
