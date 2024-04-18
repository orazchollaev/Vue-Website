<template>
    <div class="card" :class="cardClass">
        <div class="card__top">
            <h1 class="card__title" v-if="title !== 'none'">{{ title }}</h1>
            <span class="card__star" v-if="title !== 'none'">*</span>

            <p class="card__text big" v-else>{{ text }}</p>
        </div>
        <div class="card__bottom" :class="{right: title === 'none'}">
            <p class="card__text" v-if="title !== 'none'">{{ text }}</p>
            <slot v-else></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>

defineProps<{
    cardClass: string,
    title: string,
    text: string
}>();

</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 31px 20px 20px;
    border-radius: 20px;
    color: var(--white);
    overflow: hidden;

    @media(max-width: 1000px){
        padding: 8px 15px 8px 8px;
    }

    &__top {
        display: flex;
    }

    &__bottom{
        &.right{
            width: 100%;
            display: flex;
            justify-content: flex-end;
            position: relative;
        }
    }

    &__title {
        font-size: 64px;
        font-weight: 300;
        line-height: 70px;
        text-align: left;

        @media (max-width: 1000px){
            font-size: 36px;
        }
    }

    &__text {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        text-align: left;

        @media (max-width: 1000px){
            font-size: 10px;
        }

        &.big{
font-size: 24px;
font-weight: 300;
line-height: 22px;

@media (max-width: 768px){
    font-size: 18px;
    list-style: 18px;
}
        }
    }

    &.black{
        background-color: var(--black);
    }

    &.primary{
        background-color: var(--primary);
    }

    &.gray{
        background-color: var(--gray);
        color: var(--black);
    }
}
</style>