<script>
    // @ts-nocheck
    
    import { onMount } from "svelte";
    import {placemarkService} from "../services/placemark-service"

    let categoryList = [];
    let placemarkList = [];

    onMount(async () => {
        categoryList = await placemarkService.getCategories();
        for (let i=0; i<categoryList.length; i+=1) {
            const placemarks = await placemarkService.getPlacemarks(categoryList[i]._id);
            placemarkList.push(...placemarks)
            placemarkList = placemarkList;
        }
    });

    let message = "";
    async function deletePlacemark(placemarkid) {
        const success = await placemarkService.deletePlacemark(placemarkid);
        if (!success) {
            message = "Try again there is an error";
            return;
        }
        location.reload();
    }
</script>
    
<table class="table is-fullwidth">
    <thead >
        <th style="text-align: center;">Title</th>
        <th style="text-align: center;">Description</th>
        <th style="text-align: center;">latitude</th>
        <th style="text-align: center;">longitude</th>
        <th style="text-align: center;">Delete</th>
    </thead>
    <tbody >
        {#each placemarkList as placemark}
            <tr>
                <td>
                    {placemark.name}
                </td>
                <td>
                    {placemark.description}
                </td>
                <td>
                    {placemark.latitude}
                </td>
                <td>
                    {placemark.longitude}
                </td>
                <td>
                    <form>
                        <button type="submit" on:click={deletePlacemark(placemark._id)} name="delete placemark">
                            <i class="fas fa-trash"></i>
                        </button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
{#if message}
    <div class="box">
        {message}
    </div>
{/if}

