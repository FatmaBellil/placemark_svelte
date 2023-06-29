<script>
    // @ts-nocheck
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { placemarkService } from '../../../services/placemark-service';
  
    export let category;
    export let placemarks = []
    export let hasPlacemarks = false;
    onMount(async () => {
      let categoryid = $page.params.id;
      category = await placemarkService.getCategory(categoryid);
      placemarks = await placemarkService.getPlacemarks(category._id);
      if (placemarks.length > 0) {
          hasPlacemarks = true;
      }
    });
  </script>
  
  <Header>
    <MainNavigator />
  </Header>
  
  {#if hasPlacemarks}
    <h1 class="title">All placemarks of the category {category.name}:</h1>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        {#each placemarks as placemark}
            <tr>
                <td>{placemark.name}</td>
                <td>{placemark.description}</td>
                <td>{placemark.latitude}</td>
                <td>{placemark.longitude}</td>
            </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <h1 class="title">the category doesn't have any placemark</h1>
  {/if}
  