<script>
    import '$lib/styles/global.scss';
    import Header from '$lib/components/Header.svelte';
    import NavBar from '$lib/components/NavBar.svelte';

    $: expandNav = false;
</script>

<main class="container">
    <Header hasMenu={true} on:menuClick={() => (expandNav = !expandNav)} />
    <NavBar expand={expandNav} />
    <div class="content">
        <slot />
    </div>
</main>

<style lang="scss">
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
        }
        .content {
            grid-area: content;
            padding: 20px;
        }
    }
</style>
