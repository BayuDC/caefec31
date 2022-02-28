<script>
    import Header from '../components/Header.svelte';
    import LoginForm from '../components/LoginForm.svelte';
</script>

<main class="auth">
    <div class="wrapper">
        <Header />
        <LoginForm />
    </div>
</main>

<style lang="scss">
    @import '../styles/variable';

    .auth {
        background: $black2;
        height: 100vh;
        display: flex;
        align-items: center;
        padding: 0 20px;

        .wrapper {
            width: 360px;
            margin: auto;
        }
    }
</style>
