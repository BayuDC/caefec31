<script>
    export let name;
    export let values = [];
    export let value = '';

    let expand = false;
</script>

<div class="combo-box">
    <div on:click={() => (expand = !expand)}>
        <input {name} type="text" bind:value disabled />
        <div class="btn-expand">
            <span class="material-icons-outlined">
                expand_{expand ? 'less' : 'more'}
            </span>
        </div>
    </div>
    {#if expand}
        <div class="values">
            {#each values as eachValue}
                <div
                    class="value"
                    on:click={() => {
                        value = eachValue;
                        expand = false;
                    }}
                >
                    {eachValue}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    @import '../styles/variable';

    .combo-box {
        position: relative;

        input {
            padding-right: 30px;
            &:disabled {
                cursor: pointer;
                background: $white;
            }
        }

        .btn-expand {
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 0;
            height: 30px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .values {
            border: 1px solid $black;
            position: absolute;
            top: 40px;
            width: 100%;
            max-height: 300px;
            overflow-y: auto;
            background: $white;
            .value {
                cursor: pointer;
                padding: 5px 10px;
                outline: none;

                &:hover {
                    background: rgba($black, 0.1);
                }
            }
        }
    }
</style>
