<script>
// @ts-nocheck

    import { beforeUpdate, onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";
    import { writable } from "svelte/store";


    let name = "";
    let message = "";
    

    async function addCategory() {
        const category = {
            name: name,
        }
        const success = await placemarkService.createCategory(category);
        if (!success) {
            message = "Error! please try again";
            return;
        } else {
            message = "a new Category is added";
            location.reload();
        }
    }
</script>

<form on:submit|preventDefault={addCategory}>
    <div class="field">
        <label class="label" for="name">Enter the title</label>
        <input bind:value={name} class="input" id="name" name="name" placeholder="category"  type="string" />
    </div>
    <div class="field">
        <div class="control">
            <button type="submit" class="button is-link is-light">Add</button>
        </div>
    </div>
    <div class="box">
        {message}
    </div>
</form>

