<script>
    import { apiUrl } from '../config';
    import { prettyPrintJson } from 'pretty-print-json';

    import FormField from '../shared/FormField.svelte';
    import ComboBox from '../shared/ComboBox.svelte';
    import Button from '../shared/Button.svelte';
    import Input from '../shared/Input.svelte';
    import Alert from '../shared/Alert.svelte';

    let method = '';
    let path = '';

    let resBody = '';

    $: alert = {};

    const send = async () => {
        alert = { message: 'Sending...' };
        resBody = '';

        method = method || 'GET';
        path = path || '/';
        path = path[0] != '/' ? '/' + path : path;

        try {
            const res = await fetch(apiUrl + path, {
                method,
                credentials: 'include',
            });

            let type = '';
            if (String(res.status)[0] == 2) type = 'success';
            if (String(res.status)[0] == 4) type = 'error';

            alert = {
                code: res.status,
                message: res.statusText,
                type,
            };

            const body = await res.json();
            resBody = prettyPrintJson.toHtml(body, {
                indent: 2,
            });
        } catch (err) {}
    };
</script>

<main>
    <div class="request">
        <FormField name="method" label="Method" error={false}>
            <ComboBox bind:value={method} values={['GET', 'POST', 'PUT', 'DELETE']} />
        </FormField>
        <FormField name="path" label="Path" error={false}>
            <Input bind:value={path} name="path" required />
        </FormField>
    </div>
    <div class="response">
        <FormField label="Result" error={false}>
            <div class="result">
                <Alert type={alert.type} code={alert.code} message={alert.message} />
                <pre class="json-container">{@html resBody}</pre>
            </div>
        </FormField>
    </div>
    <div class="action">
        <FormField label="Action">
            <div>
                <Button on:click={send}>Send</Button>
            </div>
        </FormField>
    </div>
</main>

<style lang="scss">
    @import '../styles/variable';

    main {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 20px 10px;

        .request {
            display: grid;
            grid-template-columns: 100px 1fr;
            grid-area: 1 / span 2;
            gap: 10px;
        }
        .response {
            overflow: auto;

            .result {
                overflow: auto;
                border: 1px solid $black;
                padding: 10px 0;
                min-height: 300px;

                & :global(p) {
                    padding: 0 10px 10px 10px;
                }

                pre {
                    padding: 0 10px;
                    display: inline-block;
                    font-size: 14px;

                    & :global(a) {
                        color: $black;
                        font-size: 14px;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
