<script>
    import { page } from '$app/stores';

    import NavLink from './NavLink.svelte';
    import AuthCard from './AuthCard.svelte';

    export let expand;

    const user = $page.stuff.user;
</script>

<div class="navbar" class:expand>
    {#if user.manageContent}
        <div class="links">
            <NavLink href="/picture">Manage Pictures</NavLink>
            <NavLink href="/picture/new">New Picture</NavLink>
            <NavLink href="/picture/update">Update Picture</NavLink>
        </div>
    {/if}
    {#if user.manageUser}
        <div class="links">
            <NavLink href="/user">Manage Users</NavLink>
            <NavLink href="/user/new">New User</NavLink>
            <NavLink href="/user/update">Update User</NavLink>
        </div>
    {/if}

    <AuthCard username={user.username} />
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
            display: none;

            &.expand {
                display: flex;
            }
        }

        @include on-mobile {
            width: 100vw;
        }

        .links {
            margin-top: 20px;
        }
    }
</style>
