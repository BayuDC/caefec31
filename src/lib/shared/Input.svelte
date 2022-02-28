<script>
    export let required = false;
    export let name;
    export let value = '';
</script>

<input type="text" bind:value {name} id={name} autocomplete="off" {required} />

<style lang="scss">
    @import '../styles/variable';

    :global(input) {
        font-family: $font-source;
        font-weight: 600;
        font-size: 16px;

        outline: none;
        border: 1px solid $black;
        padding: 0 10px;
        height: 30px;

        display: block;
        width: 100%;
        box-sizing: border-box;
    }
</style>
