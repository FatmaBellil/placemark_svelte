<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import {placemarkService} from "../services/placemark-service"

    let categoryList = [];
    onMount(async () => {
        categoryList = await placemarkService.getCategories();
    });

    
    let message = "";
    async function deleteCategory(categoryid) {
    
        const success = await placemarkService.deleteCategory(categoryid);
        if (!success) {
            message = "Try again there is an error";
            return;
        }
        location.reload();
    }

</script>

<table class="table is-fullwidth">
    <thead>
        <th style="text-align: center;">Title</th>
        <th style="text-align: center;">Details</th>
        <th style="text-align: center;">Delete</th>
    </thead>
    <tbody>
        {#each categoryList as category}
            <tr>
                <td>
                    {category.name}
                </td>
                <td>
                    <form action="/categories/{category._id}" method="POST">
                        <button type="submit" name="get category">
                            <i class="fas fa-edit"></i>
                        </button>
                    </form>
                </td>
                <td>
                    <form>
                        <button type="submit" on:click={deleteCategory(category._id)} name="delete category" data-category-id={category._id}>
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

  