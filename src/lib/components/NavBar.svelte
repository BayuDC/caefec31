<script>
    import NavLink from './NavLink.svelte';
    import AuthCard from './AuthCard.svelte';

    export let expand;
</script>

<div class="overlay" class:active={expand} on:click={() => (expand = false)} />
<div class="navbar" class:expand>
    <NavLink parent={true}>
        <NavLink href="/picture">Manage Pictures</NavLink>
        <NavLink href="/picture/new">New Picture</NavLink>
        <NavLink href="/picture/update">Update Picture</NavLink>
    </NavLink>
    <NavLink parent={true}>
        <NavLink href="/user">Manage Users</NavLink>
        <NavLink href="/user/new">New User</NavLink>
        <NavLink href="/user/update">Update User</NavLink>
    </NavLink>

    <AuthCard />
</div>

<style lang="scss">
    @import '../styles/variable';
    @import '../styles/mixin';

    .navbar {
        width: 240px;
        background: $gray;
        box-sizing: border-box;
        color: $white;
        display: flex;
        flex-direction: column;

        @include on-tablet {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            transform: translateX(-100%);

            &.expand {
                transform: translateX(0);
            }
        }

        @include on-mobile {
            width: 100vw;
        }
    }

    .overlay {
        background: rgba(#000, 0.1);
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: none;

        @include on-tablet {
            &.active {
                display: block;
            }
        }
        @include on-mobile {
            display: none !important;
        }
    }
</style>
