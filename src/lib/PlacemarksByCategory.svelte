<script>
	// @ts-nocheck

	import Chart from 'svelte-frappe-charts';
	import { onMount } from 'svelte';
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

	function populateByCategory(categoryList) {
	    totalByCategory.labels = [];
	    totalByCategory.datasets[0].values = [];
	    categoryList.forEach(async (category) => {
	        totalByCategory.labels.push(`${category.name}`);
	        const placemarks = await placemarkService.getPlacemarks(category._id);
	        totalByCategory.datasets[0].values.push(placemarks.length);
	        console.log(category)
	        console.log(placemarks.length)
	    });
	}

	

	async function refreshChart() {
		let categoryList = await placemarkService.getCategories();
		populateByCategory(categoryList);
	}

	onMount(async () => {
		refreshChart();
	});
</script>

<Chart data={totalByCategory} type={chartType} />


  