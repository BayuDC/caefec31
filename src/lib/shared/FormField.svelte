<script>
    import Input from './Input.svelte';

    export let name;
    export let label;
    export let error = '';
    export let value = '';
</script>

<div class="form-field">
    <label for={name}>{label}</label>
    <Input {name} bind:value />
    {#if error !== false}
        <p>{error}</p>
    {/if}
</div>

<style lang="scss">
    @import '../styles/variable';

    .form-field {
        margin-bottom: 5px;

        label {
            font-family: $font-fira;
            font-weight: 700;
            font-size: 16px;
        }

        p {
            font-size: 14px;
            height: 18px;

            text-align: right;
            color: $pink;
        }
    }
</style>
