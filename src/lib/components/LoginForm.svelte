<script>
    import Button from '../shared/Button.svelte';
    import Input from '../shared/Input.svelte';
</script>

<form on:submit|preventDefault>
    <Input name="username" label="Username" />
    <Input name="password" label="Password" />
    <Button>Login</Button>
</form>

<style lang="scss">
    @import '../styles/variable';

    form {
        background: $white;
        padding: 20px;

        display: flex;
        flex-direction: column;

        & :global(button) {
            margin-top: 20px;
            align-self: end;
        }
    }
</style>
