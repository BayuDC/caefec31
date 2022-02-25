<script>
    import Button from '../shared/Button.svelte';
    import Input from '../shared/Input.svelte';
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
    <Input bind:value={username} error={usernameErr} name="username" label="Username" />
    <Input bind:value={password} error={passwordErr} name="password" label="Password" />
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
    }
</style>
