<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	

	import Chart from 'svelte-frappe-charts';
	import { placemarkService } from '../services/placemark-service';

	export let chartType = '';
	let totalByCategory = {
		labels: [],
		datasets: [
			{
				values: []
			}
		]
	};

	async function populateByCategory(categoryList) {
		for (let i = 0; i < categoryList.length; i += 1) {
			const category = categoryList[i];
			totalByCategory.labels.push(category.name);
			const placemarks = await placemarkService.getPlacemarks(category._id);
			totalByCategory.datasets[0].values.push(placemarks.length);
		}
		totalByCategory = totalByCategory;
	}

	async function refreshChart() {
		let categoryList = await placemarkService.getCategories();
		await populateByCategory(categoryList);
	}

	onMount(async () => {
		await refreshChart();
	});
</script>

<Chart data={totalByCategory} type={chartType} />
