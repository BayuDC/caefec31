<script>
    import { createEventDispatcher } from 'svelte';

    export let hasMenu = false;

    const dispatch = createEventDispatcher();
</script>

<div class="header">
    <a href="/">
        <h1>Waifuseum</h1>
    </a>
    {#if hasMenu}
        <span on:click={() => dispatch('menuClick')} class="material-icons-outlined">menu</span>
    {/if}
</div>

<style lang="scss">
    @import '../styles/variable';
    @import '../styles/mixin';

    .header {
        background: $black;
        color: $white;
        padding: 0 20px;
        display: flex;
        align-items: center;
        height: 60px;

        h1 {
            font-family: $font-fira;
            font-size: 24px;
            font-weight: 700;
            font-style: italic;
        }

        span {
            margin-left: auto;
            font-size: 32px;
            display: none;

            @include on-tablet {
                display: inherit;
            }
        }
    }
</style>
