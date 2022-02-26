<script context="module">
    import { apiUrl } from '$lib/config';

    export async function load({ fetch }) {
        try {
            const res = await fetch(apiUrl + '/auth', {
                credentials: 'include',
            });
            const data = await res.json();

            if (!res.ok) throw 0;

            return { stuff: data };
        } catch (err) {
            return {
                status: 302,
                redirect: '/auth',
            };
        }
    }
</script>

<script>
    import '$lib/styles/global.scss';
    import Header from '$lib/components/Header.svelte';
    import NavBar from '$lib/components/NavBar.svelte';
    import Overlay from '$lib/shared/Overlay.svelte';

    $: expandNav = false;
</script>

<main class="container">
    <Header hasMenu={true} on:menuClick={() => (expandNav = !expandNav)} />
    {#if expandNav}
        <Overlay on:click={() => (expandNav = !expandNav)} />
    {/if}
    <NavBar expand={expandNav} />
    <div class="content">
        <slot />
    </div>
</main>

<style lang="scss">
    @import '../lib/styles/variable';
    @import '../lib/styles/mixin';

    .container {
        height: 100vh;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        grid-template-areas: 'header header' 'navbar content';
        position: relative;

        @include on-tablet {
            grid-template-columns: 0 1fr;
        }

        & :global(.header) {
            grid-area: header;
        }
        & :global(.navbar) {
            grid-area: navbar;
        }
        & :global(.overlay) {
            grid-area: content;
            display: none;

            @include on-tablet {
                display: block;
            }
        }
        .content {
            color: $black;
            grid-area: content;
            padding: 30px;
        }
    }
</style>
