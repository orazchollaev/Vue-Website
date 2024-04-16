<template>
    <button :class="btnClass">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>

defineProps<{ btnClass: string }>();

</script>

<style lang="scss" scoped>
button {
    transition: all 0.1s;
    cursor: pointer;

    &.primary {
        background-color: var(--primary);
        color: var(--white);

        &:hover {
            background-color: #295B65;
        }

        &:active {
            background-color: #A5B9BD;
        }
    }

    &.gray {
        background-color: var(--gray);
        color: #7D7D7D;
        width: auto;

        &:hover {
            background-color: #BEBEBE;
            color: var(--white);
        }

        &:active {
            background-color: var(--gray);
            color: #CECECE;
        }
    }

    &.small {
        font-family: 'Golos Text';
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        padding: 8px 28px;
        border-radius: 15px;
    }

    &.big {
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
        border-radius: 20px;
        padding: 16px 0;
        width: 250px;

        &.gray{
            width: 220px;
        }
    }

    &:active {
        transform: scale(0.96);
    }
}
</style>