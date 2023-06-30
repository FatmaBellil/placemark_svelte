<script>
	import PlacemarksByCategory from '$lib/PlacemarksByCategory.svelte';
	import Header from '$lib/Header.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
</script>

<Header>
	<MainNavigator />
</Header>

<h1 class="title is-4 has-text-centered">PLacemarks by Category Chart:</h1>
<div class="columns box">
	<div class="column  has-text-centered">
		<PlacemarksByCategory chartType={"bar"} />
	</div>
	<div class="column  has-text-centered">
		<PlacemarksByCategory chartType={"pie"} />
	</div>
</div>
