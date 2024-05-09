const tempInputCelsius = document.querySelector('#celsius > input');
const tempInputFahrenheit = document.querySelector('#fahrenheit > input');
const tempInputKelvin = document.querySelector('#kelvin > input');

const roundToTwoDecimalPlaces = (num) => {
return num.toFixed(2);
};

const convertCelsiusToFahrenheitAndKelvin = () => {
const tempCelsius = parseFloat(tempInputCelsius.value);
const tempFahrenheit = (tempCelsius * 1.8) + 32;
const tempKelvin = tempCelsius + 273.15;

tempInputFahrenheit.value = roundToTwoDecimalPlaces(tempFahrenheit);
tempInputKelvin.value = roundToTwoDecimalPlaces(tempKelvin);
};

const convertFahrenheitToCelsiusAndKelvin = () => {
const tempFahrenheit = parseFloat(tempInputFahrenheit.value);
const tempCelsius = (tempFahrenheit - 32) * (5 / 9);
const tempKelvin = (tempFahrenheit + 459.67) * (5 / 9);

tempInputCelsius.value = roundToTwoDecimalPlaces(tempCelsius);
tempInputKelvin.value = roundToTwoDecimalPlaces(tempKelvin);
};

const convertKelvinToCelsiusAndFahrenheit = () => {
const tempKelvin = parseFloat(tempInputKelvin.value);
const tempCelsius = tempKelvin - 273;
const tempFahrenheit = 1.8 * (tempKelvin - 273) + 32;

tempInputCelsius.value = roundToTwoDecimalPlaces(tempCelsius);
tempInputFahrenheit.value = roundToTwoDecimalPlaces(tempFahrenheit);
};

const initializeTemperatureConversion = () => {
tempInputCelsius.addEventListener('input', convertCelsiusToFahrenheitAndKelvin);
tempInputFahrenheit.addEventListener('input', convertFahrenheitToCelsiusAndKelvin);
tempInputKelvin.addEventListener('input', convertKelvinToCelsiusAndFahrenheit);
};

initializeTemperatureConversion();
