<!-- It defines a container with a slot element, allowing content to be inserted into the container from other components.-->
<script>
    import { beforeUpdate } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    beforeUpdate(() => {
        placemarkService.reload();
    });
</script>

<div class="container">
    <slot />
</div>
