const axios = require('axios');

// const getExchangeRate = (from, to) => {
// 	return axios
// 		.get(
// 			'http://data.fixer.io/api/latest?access_key=0107b47c9e6076cb771c8cede26bb6bf'
// 		)
// 		.then((resp) => {
// 			const euro = 1 / resp.data.rates[from];
// 			const rate = euro * resp.data.rates[to];
// 			return rate;
// 		});
// };

//Above function converted to Async - await.
const getExchangeRate = async (from, to) => {
	const resp = await axios.get(
		'http://data.fixer.io/api/latest?access_key=0107b47c9e6076cb771c8cede26bb6bf'
	);
	const euro = 1 / resp.data.rates[from];
	const rate = euro * resp.data.rates[to];
	return rate;
};

// const getCountries = (currCode) => {
// 	return axios
// 		.get(`https://restcountries.eu/rest/v2/currency/${currCode}`)
// 		.then((resp) => {
// 			return resp.data.map((country) => country.name);
// 		});
// };

//Above function converted to Async-await
const getCountries = async (currCode) => {
	const resp = await axios.get(
		`https://restcountries.eu/rest/v2/currency/${currCode}`
	);
	return resp.data.map((country) => country.name);
};

// const convertCurrency = (from, to, amount) => {
// 	let convertedAmount;
// 	getExchangeRate(from, to)
// 		.then((rate) => {
// 			convertedAmount = (amount * rate).toFixed(2);
// 			// console.log(convertedAmount);
// 			return getCountries(to);
// 		})
// 		.then((countries) => {
// 			// console.log(countries);
// 			console.log(
// 				`${amount} ${from} is worth ${convertedAmount} ${to}.You can spend it in: ${countries}`
// 			);
// 		});
// };

const convertCurrency = async (from, to, amount) => {
	const rate = await getExchangeRate(from, to);
	const countries = await getCountries(to);

	const convertedAmount = (amount * rate).toFixed(2);
	return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend in ${countries}`;
};

convertCurrency('CAD', 'USD', 20).then((message) => {
	console.log(message);
});
