<div class="auth-card">
    <p>Login as <span>Anonymous</span></p>
    <a href="/auth/logout" on:click|preventDefault>Logout</a>
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
