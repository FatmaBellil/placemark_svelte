<script>
// @ts-nocheck

	import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service";
    import  Coordinates  from "$lib/Coordinates.svelte";

    let CategoryList = [];

    let name = "";
    let description = "";
    let latitude = 49.013432;
    let longitude = 12.1016;

    let message = "";
    let selectedCategory = "";


    onMount(async () => {
        CategoryList = await placemarkService.getCategories();
    });

    async function addPlacemark() {
        if (CategoryList.length == 0) {
            message = "Please add a new category first, and then you can add a new placemark in it.";
            return;
        }
        if (name && selectedCategory && description && latitude && longitude) {
            const category = CategoryList.find((item) => item.name == selectedCategory);
        
            const placemark = {
                name: name,
                description: description,
                latitude: latitude,
                longitude: longitude
            };
            const success = await placemarkService.createPlacemark(category._id, placemark);
            if (!success) {
                message = "Error! please try again";
                return;
            } else {
                location.reload();
            }
        } else {
            message = "please add a valide Placemark"
        }

    };

</script>

<form on:submit|preventDefault={addPlacemark}>
    <div class="columns is-multiline is-mobile">
        <div class="field column is-one-quarter">
            <input bind:value={name} class="input" id="name" name="name" placeholder="placemark"  type="string" />
        </div>
        <div class="field column">
            <input bind:value={description} class="input" id="description" name="description" placeholder="description"  type="string" />
        </div>
    </div>
    <div class="field">
        <div class="select">
            <select bind:value={selectedCategory}>
                {#each CategoryList as category}
                    <option>{category.name}</option>
                {/each}
            </select>
        </div>
    </div>
    <Coordinates bind:latitude bind:longitude />
    <div class="field">
        <div class="control">
            <button class="button is-link is-light">Add</button>
        </div>
    </div>
    <div class="box">
        {message}
    </div>
</form>

