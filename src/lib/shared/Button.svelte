<button on:click>
    <slot />
</button>

<style lang="scss">
    @import '../styles/variable';
    button {
        outline: none;
        border: none;
        cursor: pointer;

        font-size: 16px;
        font-weight: 700;
        font-family: $font-fira;

        background: $black;
        color: $white;

        padding: 10px 15px;
    }
</style>
