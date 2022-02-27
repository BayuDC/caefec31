<script>
    import { apiUrl } from '../config';

    import FormField from '../shared/FormField.svelte';
    import Button from '../shared/Button.svelte';
    import Alert from '../shared/Alert.svelte';

    let fileUrl;
    let sauce;
    let category;

    $: alert = {};
</script>

<form
    on:submit|preventDefault={async () => {
        alert = { code: 100, message: 'Processing...' };

        try {
            const res = await fetch(apiUrl + '/museum', {
                method: 'post',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ category, sauce, picture: fileUrl }),
            });
            const body = await res.json();

            if (!res.ok) {
                throw { code: res.status, message: body.error };
            }

            alert = { type: 'success', code: res.status, message: body.picture._id };
        } catch (err) {
            alert = { type: 'error', ...err };
        }
    }}
>
    <FormField bind:value={fileUrl} name="file" label="File Url" required />
    <FormField bind:value={sauce} name="sauce" label="Sauce" />
    <FormField bind:value={category} name="category" label="Category" required />

    <div class="form-control">
        <Button>Add</Button>
        <Alert type={alert.type} code={alert.code} message={alert.message} />
    </div>
</form>

<style lang="scss">
    @import '../styles/variable';
    @import '../styles/mixin';

    form {
        max-width: 400px;

        .form-control {
            margin-top: 10px;
            display: flex;
            align-items: start;

            & :global(p) {
                margin: auto 0 auto 20px;
            }
        }
    }
</style>
