const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetching exchange rates from API and updating the DOM
function calculate() {
	const currOne = currencyOne.value;
	const currTwo = currencyTwo.value;

	// Using Fetch
	fetch(
		`https://v6.exchangerate-api.com/v6/e3a9431a6df186387eec4a21/latest/${currOne}`
	)
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			const ratee = data.conversion_rates[currTwo];

			rate.innerText = `1 ${currOne} = ${ratee} ${currTwo}`;

			amountTwo.value = (amountOne.value * ratee).toFixed(2);
		});
}
//Evenet listeners
currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);
swap.addEventListener('click', () => {
	const tmp = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = tmp;
	calculate();
});

calculate();
