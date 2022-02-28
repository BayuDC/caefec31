<script>
    import { apiUrl } from '../config';

    import FormField from '../shared/FormField.svelte';
    import Button from '../shared/Button.svelte';
    import Input from '../shared/Input.svelte';
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
    <FormField name="file" label="File Url">
        <Input name="file" bind:value={fileUrl} required />
    </FormField>
    <FormField name="sauce" label="Sauce">
        <Input name="sauce" bind:value={sauce} required />
    </FormField>
    <FormField name="category" label="Category">
        <Input name="category" bind:value={category} required />
    </FormField>

    <div class="form-control">
        <Button disable={alert.code == 100}>Add</Button>
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
