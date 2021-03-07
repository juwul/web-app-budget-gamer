<script>
    import { moment } from "moment";
    // import { createEventDispatcher } from 'svelte';

    // const dispatch = createEventDispatcher();

    // function remove() {
    // 	dispatch('remove', { id });
    // }

    // function toggleStatus() {
    //     let newStatus = !complete;
    // 	dispatch('toggle', {
    //         id,
    //         newStatus
    //     });
    // }

    // export let id; // document ID
    // export let text;
    // export let complete;

    export let id; // document ID
    export let title;
    export let description;
    export let provider;
    export let link;
    export let endDate;
</script>

<li>
    <!-- {#if complete}
    <span class="is-complete">{ text }</span>
    <button on:click={toggleStatus}> ✔️ </button>
{:else}
    <span>{ text }</span>
    <button on:click={toggleStatus}> ❌ </button>
{/if}

<button on:click={remove}> 🗑 </button> -->

    {#if endDate > parseInt(moment().format("X"))}
        <div class="cover">
            Read more
            <img src="" alt="" />
        </div>

        <div class="details">
            <div class="title-area" />
            <div class="action-area" />
        </div>

        <span>{text}</span>
        <button on:click={toggleStatus}> ❌ </button>
    {:else}
        <span class="expired">Offer expired</span>
    {/if}

    <button on:click={remove}> 🗑 </button>
</li>

<style>
    .expired {
        background-color: red;
    }
    /* .is-complete {
        text-decoration: line-through;
        color: green;
    } */
</style>
