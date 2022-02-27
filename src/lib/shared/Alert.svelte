<script>
    export let type = '';
    export let code;
    export let message;
</script>

<p class={type}>
    {#if code}
        <span>{code}:</span>
    {/if}
    {message ?? ''}
</p>

<style lang="scss">
    @import '../styles/variable';

    p {
        font-family: $font-fira;
        font-size: 16px;
        font-weight: 500;

        &.success {
            color: $green;
        }
        &.error {
            color: $pink;
        }

        span {
            font-weight: 700;
        }
    }
</style>
