<template>
    <div class="achieve">
        <div class="achieve__container">
            <div class="achieve__top">
                <BaseTitle>Как мы этого добиваемся?</BaseTitle>

                <ul class="achieve__list">
                    <li class="achieve__item" v-for="item in achieveList">
                        <img :src="require(`@/assets/images/achieve_icon_${item.iconID}.png`)"
                            class="achieve__item-icon">
                        <p class="achieve__item-text">{{ item.text }}</p>
                    </li>
                </ul>
            </div>
            <div class="achieve__bottom">
                <p class="achieve__small-text">Единым для всех клиентов остается только одно: </p>
                <p class="achieve__medium-text">
                    Мы предлагаем <span class="achieve__primary-color"> формат микрообучения </span> c максимальным
                    <span class="achieve__primary-color"> упором на практику. </span>
                    Концентрированная информация, без воды и отступлений. Это позволит сократить время обучения без
                    потери качества. <span class="achieve__primary-color"> Только максимум смысла и пользы.</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseTitle from "./Base/BaseTitle.vue";

const achieveList = ref([
    {
        iconID: 1,
        text: 'Разрабатываем систему геймификации, учитывая задачи вашего бизнеса не используя шаблоны'
    },

    {
        iconID: 2,
        text: 'Предлагаем игровые механики в зависимости от возраста сотрудников, профессии и конечных целей, которые ставит обучение'
    },

    {
        iconID: 3,
        text: 'Сокращаем сроки обучения без потери качества'
    }
])

</script>

<style lang="scss" scoped>
.achieve {
    &__container {
        display: flex;
        flex-direction: column;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        gap: 175px;

        @media(max-width: 1200px) {
            gap: 100px;
        }

        @media(max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    &__item {
        border-top: 1px solid #ddd;
        padding: 32px 0 32px 45px;
        display: flex;
        align-items: center;
        gap: 24px;

        @media (max-width: 768px) {
            padding: 32px 0;

            &:first-of-type {
                border: none;
            }
        }
    }

    &__item-text {
        font-size: 24px;
        font-weight: 300;
        line-height: 30px;

        @media (max-width: 768px) {
            font-size: 14px;
            line-height: 17.5px;
        }
    }

    &__bottom {
        border-top: 1px solid #ddd;
        padding-top: 32px;

        @media (max-width: 768px){
            border: none;
        }
    }

    &__small-text {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #7d7d7d;
        margin-bottom: 24px;

        @media (max-width: 768px) {
            font-size: 12px;
            line-height: 15px;
            margin-bottom: 16px;
        }
    }

    &__medium-text {
        font-size: 24px;
        font-weight: 300;
        line-height: 30px;

        @media (max-width: 768px) {
            font-size: 16px;
            line-height: 20px;
        }
    }
}
</style>