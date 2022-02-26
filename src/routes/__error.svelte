<script context="module">
    export async function load({ error, status }) {
        return {
            props: { status, error: error.message },
        };
    }
</script>

<script>
    export let status = 404;
    export let error = 'Not Found';
</script>

<div class="error">
    <h1>{status}</h1>
    <p>{error}</p>
</div>

<style lang="scss">
    .error {
        text-align: center;
        height: 100%;

        h1 {
            font-size: 80px;
        }
        p {
            font-size: 20px;
            font-weight: 700;
        }
    }
</style>
