<script>
    import { user } from "../stores.js";
    export let title = "";

</script>

<div class="box has-text-centered columns m-2">
    <div class="column">
        <img src="/placemark.png" width="60" alt="placemark" />
    </div>
    <div class="column ">
        <div class="title is-5">{title}</div>
    </div>
    <div class="column">
        <i class="fa fa-user fa-3x" ></i>
        {#if $user.email}
            <div class="is-size-7">{$user.email}</div>
        {:else}
            <div class="is-size-7">sign up or log in</div>
        {/if}
    </div>
</div>
