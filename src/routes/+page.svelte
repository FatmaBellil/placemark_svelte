<script>
    import Header from '../lib/Header.svelte';
	import WelcomeNavigator from '../lib/WelcomeNavigator.svelte';
</script>

<Header>
    <WelcomeNavigator />
</Header>

<div class="columns is-vcentered content">
    <div class="column has-text-centered">
        <img width="300" src="/globe.png" alt="globe" />
    </div>
    <div class="column has-text-centered">
        <h1 class="title">Welcome to placemark services</h1>
        <p>Use our services for free!</p>
        <p>Without any limitations!</p>
    </div>
</div>
