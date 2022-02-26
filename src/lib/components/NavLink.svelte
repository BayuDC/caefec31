<script>
    export let href;
    export let parent = false;
</script>

{#if parent}
    <div class="links">
        <slot />
    </div>
{:else}
    <a {href}><slot /></a>
{/if}

<style lang="scss">
    .links {
        margin-top: 20px;
    }
    a {
        display: flex;
        align-items: center;
        padding: 10px 30px;

        &:nth-child(1) {
            padding: 10px 20px;
        }

        &:hover {
            background: rgba(#000, 0.1);
        }
    }
</style>
