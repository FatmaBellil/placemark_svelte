<script>
    import { beforeUpdate } from "svelte";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import PlacemarkMap from "$lib/PlacemarkMap.svelte";
    import { placemarkService } from "../../services/placemark-service";

    beforeUpdate(() => {
        placemarkService.reload();
    });
</script>

<Header>
    <MainNavigator />
</Header>

<PlacemarkMap />
