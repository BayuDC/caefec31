<script>
    export let href;
</script>

<a {href}><slot /></a>

<style lang="scss">
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
