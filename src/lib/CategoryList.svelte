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
{#if categoryList.length > 0}
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
                        <button>
                            <a href={`/category/${category._id}`}>
                                <i class="fas fa-edit"></i>
                            </a>
                        </button>
                    </td>    
                    <td>
                        <form>
                            <button type="submit" on:click={deleteCategory(category._id)} name="deletecategory" >
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
{:else}
    <h1 class="title">There are no categories yet.</h1>
{/if}
    