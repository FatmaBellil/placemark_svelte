<script>
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
	import CategoryList from '$lib/CategoryList.svelte';
	import AddCategoryForm from '$lib/AddCategoryForm.svelte';
	import { placemarkService } from '../../services/placemark-service';
	import { beforeUpdate } from 'svelte';

    

</script>

<Header>
    <MainNavigator />
</Header>


   
<div class="box has-text-centered">
    <h1 class="title is-4">Categories:</h1>
    <CategoryList />
</div>
<div class="box has-text-centered">
    <h1 class="title is-4">Add a new category:</h1>
    <AddCategoryForm/>
</div>

