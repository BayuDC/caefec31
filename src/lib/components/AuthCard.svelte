<script>
    import { apiUrl } from '../config';

    export let username;

    const href = '/auth/logout';
</script>

<div class="auth-card">
    <p>Login as <span>{username}</span></p>
    <a
        {href}
        on:click|preventDefault={async () => {
            await fetch(apiUrl + href, {
                method: 'delete',
                credentials: 'include',
            });

            window.location = '/auth';
        }}>Logout</a
    >
</div>

<style lang="scss">
    @import '../styles/variable';
    .auth-card {
        margin-top: auto;
        padding: 20px;
        background: $black;

        p {
            text-overflow: ellipsis;
            overflow: hidden;
            font-weight: 400;
            span {
                font-weight: 700;
            }
        }
        a {
            text-decoration: underline;
        }
    }
</style>
