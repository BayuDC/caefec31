<script>
    import FormField from '../shared/FormField.svelte';
    import Button from '../shared/Button.svelte';
</script>

<form on:submit|preventDefault>
    <FormField name="file" label="File Url" required />
    <FormField name="sauce" label="Sauce" />
    <FormField name="category" label="Category" required />

    <div class="form-control">
        <Button>Add</Button>
        <p>
            <span>100:</span>
            Processing...
        </p>
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

            p {
                margin: auto 0 auto 20px;
                font-size: 16px;
                font-family: $font-fira;
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
        }
    }
</style>
