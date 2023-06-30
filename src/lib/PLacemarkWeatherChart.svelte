<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import Chart from 'svelte-frappe-charts';

	// @ts-nocheck

	export let placemark;

	let report = {
		labels: ['tomorrow', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'],
		datasets: [
			{ name: 'temperature', type: 'bar', values: [] },
			{ name: 'windspeed', type: 'line', values: [] }
		]
	};

	let data = [];
	onMount(async () => {
		await fetchWeekForecast(placemark);
	});

	// Example implementation using OpenWeatherMap API
	async function fetchWeekForecast(placemark) {
		try {
			const apiKey = '95dd343279aea14b4b6a6223e8736b12';
			let lat = placemark.latitude;
			let lng = placemark.longitude;
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
			);

			// Extract the relevant forecast data from the response
			const fetchedData = await response.json();
			const forecast = fetchedData.daily;
			for (let i = 1; i < forecast.length; i++) {
				report.datasets[0].values.push(forecast[i].temp.day);
				report.datasets[1].values.push(forecast[i].wind_speed);
			}
			report = report;
		} catch (error) {
			console.error('Failed to fetch week forecast:', error);
		}
	}
</script>

<Chart data={report} type="axis-mixed" title="Weather forecast for the next 7 days:" height="300" />
