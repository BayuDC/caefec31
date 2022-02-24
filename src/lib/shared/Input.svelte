<script>
    export let name;
    export let label;
    export let error = 'Something went wrong';
</script>

<div class="input-field">
    <label for={name}>{label}</label>
    <input type="text" {name} id={name} autocomplete="off" />
    <p>{error}</p>
</div>

<style lang="scss">
    @import '../styles/variable';

    .input-field {
        margin-bottom: 5px;

        label {
            font-size: 14px;
        }
        input {
            font-family: $font-source;
            font-weight: 600;
            font-size: 16px;

            outline: none;
            border: 1px solid $black;
            padding: 0 10px;
            height: 30px;

            display: block;
            width: 100%;
            box-sizing: border-box;
        }
        p {
            font-size: 14px;
            height: 18px;

            text-align: right;
            color: $pink;
        }
    }
</style>
