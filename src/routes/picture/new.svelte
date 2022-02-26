<script context="module">
    export async function load({ url }) {
        return {
            status: 403,
            error: 'Forbidden: ' + url.pathname,
        };
    }
</script>
