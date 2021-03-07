<script lang="ts">
    // import Profile from './old files/Profile.svelte';
    // import Todos from './old files/Todos.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user;

    const unsubscribe = authState(auth).subscribe((u) => (user = u));

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<section>
    {#if user}
        <Profile {...user} />
        <button on:click={() => auth.signOut()}>Logout</button>
        <hr />
        <Todos uid={user.uid} />
    {:else}
        <button on:click={login}> Signin with Google </button>
    {/if}
</section>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
