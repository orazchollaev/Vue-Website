<template>
    <div class="card" :class="cardClass">
        <div class="card__top">
            <h1 class="card__title" :class="titleClass" v-if="titleClass !== 'small'">
                <slot name="title" class="efef"></slot>
            </h1>

            <slot name="title" v-if="titleClass === 'small'"></slot>
        </div>

        <div class="card__bottom" :class="contentClass">
            <p class="card__content" :class="contentClass">
                <slot name="content"></slot>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    cardClass: {
        type: String
    },

    titleClass: {
        type: String
    },

    contentClass: {
        type: String
    }
})

</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;


    @media (max-width: 768px){
        padding: 8px;
    }

    &__title {
        &.big {
            font-size: 64px;
            font-weight: 300;
            line-height: 70px;
            text-align: left;

            @media (max-width: 1024px) {
                font-size: 36px;
                line-height: 38.18px;
            }
        }

        &.medium {
            font-size: 24px;
            font-weight: 300;
            line-height: 22px;
            text-align: left;

            @media (max-width: 1024px) {
                font-size: 14px;
                line-height: 17.5px;
            }
        }

        &.double{
            margin-bottom: 24px;
        }
    }

    &__content {
        &.small {
            font-size: 16px;
            font-weight: 300;
            line-height: 20px;
            text-align: left;

            @media (max-width: 1024px) {
                font-size: 10px;
                line-height: 12.5px;
            }
        }
    }

    &__bottom {
        &.image {
            display: flex;
            justify-content: flex-end;

            img{
                width: 100%;
                height: auto;
            }
        }
    }

    &.black {
        color: var(--white);
        background-color: var(--black);
    }

    &.gray {
        color: var(--black);
        background-color: var(--gray);
    }

    &.primary {
        color: var(--white);
        background-color: var(--primary);
    }

    &.white-gray{
        background-color: #fbfbfb;
        color: var(--black);
    }
}
</style>