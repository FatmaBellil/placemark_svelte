<script>
	// @ts-nocheck
	import Header from '$lib/Header.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { placemarkService } from '../../../services/placemark-service';
	import PlacemarkMap from '$lib/PlacemarkMap.svelte';

	export let placemark;
	export let temperature;
	export let weatherMain ;
	onMount(async () => {
		let placemarkid = $page.params.id;
		placemark = await placemarkService.getPlacemark(placemarkid);
		await fetchWeather(placemark);
	});

	async function fetchWeather(placemark) {
		const apiKey = '95dd343279aea14b4b6a6223e8736b12';
		let lat = placemark.latitude;
		let lng = placemark.longitude;

		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

		try {
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				temperature = (data.main.temp / 10).toFixed(0);
				weatherMain = data.weather[0].main;
			} else {
				throw new Error('Failed to fetch weather data');
			}
		} catch (error) {
			console.log('Error fetching weather data:', error);
		}
	}
</script>

<Header>
	<MainNavigator />
</Header>

{#if placemark}
	<table class="table is-fullwidth">
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Latitude</th>
				<th>Longitude</th>
				<th>temperature</th>
				<th>Weather</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{placemark.name}</td>
				<td>{placemark.description}</td>
				<td>{placemark.latitude}</td>
				<td>{placemark.longitude}</td>
				<td>{temperature}</td>
				<td>{weatherMain}</td>
			</tr>
		</tbody>
	</table>
{:else}
	<p>Loading...</p>
{/if}
