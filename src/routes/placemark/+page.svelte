<script>
// @ts-nocheck

	import AddPlacemarkForm from '$lib/AddPlacemarkForm.svelte';
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
	import PlacemarkList from '$lib/PlacemarkList.svelte';
	import PlacemarkMap from '$lib/PlacemarkMap.svelte';
	

</script>

<Header>
    <MainNavigator />
</Header>


   
<div class="box has-text-centered">
    <h1 class="title is-4">All Placemarks:</h1>
    <PlacemarkList />
</div>
<div class="box has-text-centered">
    <h1 class="title is-4">Add a new Placemark:</h1>
    <AddPlacemarkForm />
</div>

<PlacemarkMap />

  