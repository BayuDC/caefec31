<script>
    import Button from '../shared/Button.svelte';
    import Input from '../shared/Input.svelte';
    import FormField from '../shared/FormField.svelte';
    import { apiUrl } from '../config';

    let processing = false;
    let username = '';
    let password = '';
    let usernameErr;
    let passwordErr;
</script>

<form
    on:submit|preventDefault={async () => {
        usernameErr = passwordErr = '';
        processing = true;

        try {
            const res = await fetch(apiUrl + '/auth/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include',
            });

            if (!res.ok) {
                throw (await res.json()).error;
            }

            window.location = '/';
        } catch (err) {
            usernameErr = err.username ?? '';
            passwordErr = err.password ?? '';
        }

        processing = false;
    }}
>
    <FormField name="username" label="Username" error={usernameErr}>
        <Input name="username" bind:value={username} required />
    </FormField>
    <FormField name="password" label="Password" error={passwordErr}>
        <Input name="password" bind:value={password} required />
    </FormField>
    <Button>
        {#if processing}
            Login...
        {:else}
            Login
        {/if}
    </Button>
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
        & :global(.form-field label) {
            font-weight: 500 !important;
            font-size: 14px !important;
        }
    }
</style>
