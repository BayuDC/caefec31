<script>
    import FormField from '../shared/FormField.svelte';
    import ComboBox from '../shared/ComboBox.svelte';
    import Button from '../shared/Button.svelte';
    import Input from '../shared/Input.svelte';
</script>

<main>
    <div class="request">
        <FormField name="method" label="Method" error={false}>
            <ComboBox values={['GET', 'POST', 'PUT', 'DELETE']} />
        </FormField>
        <FormField name="path" label="Path" error={false}>
            <Input name="path" required />
        </FormField>
    </div>
    <div class="response">
        <FormField label="Result" error={false}>
            <div class="wrapper">
                <!--  -->
            </div>
        </FormField>
    </div>
    <div class="action">
        <FormField label="Action">
            <div>
                <Button>Send</Button>
            </div>
        </FormField>
    </div>
</main>

<style lang="scss">
    @import '../styles/variable';

    main {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 20px;

        .request {
            display: grid;
            grid-template-columns: 100px 1fr;
            grid-area: 1 / span 2;
            gap: 10px;
        }
        .response {
            .wrapper {
                border: 1px solid $black;
                min-height: 300px;
            }
        }
    }
</style>
