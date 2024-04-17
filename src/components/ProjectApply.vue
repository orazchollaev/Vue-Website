<template>
    <div class="project-apply">
        <div class="project-apply__container">
            <div class="project-apply__top">
                <BaseTitle>Что можем применить на проекте?</BaseTitle>
            </div>

            <div class="project-apply__center">
                <div class="project-apply__button" v-for="(button, index) in buttons"
                    :class="{ active: isActive == index }" @click="isActive = index">
                    <img class="project-apply__button-icon"
                        :src="require(`@/assets/images/button_icon_${button.iconID}.svg`)">
                    <span class="project-apply__button-text">{{ button.text }}</span>
                </div>
            </div>

            <div class="project-apply__bottom">
                <div class="project-apply__card" v-for="(item, index) in projectApplyList" v-show="isActive == index">
                    <div class="project-apply__card-left"
                        :style="{ backgroundImage: `url(${require(`@/assets/images/project_apply_img_${item.imageID}.png`)})` }">
                        <p class="project-apply__card-img-title">{{ item.title_1 }}</p>
                    </div>

                    <div class="project-apply__card-right">
                        <p class="project-apply__text-title">{{ item.title_2 }}</p>
                        <p class="project-apply__text-content">{{ item.content }}</p>
                        <BaseButton btnClass="primary big">Обсудить проект</BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import BaseButton from './Base/BaseButton.vue';
import BaseTitle from './Base/BaseTitle.vue';
import { ref } from 'vue';

const isActive = ref(3);

const buttons = ref([
    {
        iconID: 1,
        text: 'Торговым компаниям'
    },
    {
        iconID: 1,
        text: 'Заводам и фабрикам'
    },
    {
        iconID: 3,
        text: 'Охранным предприятиям'
    },
    {
        iconID: 5,
        text: 'Образовательным центрам'
    },
    {
        iconID: 5,
        text: 'Мебельным предприятиям'
    },
])

const projectApplyList = ref([
    {
        imageID: 1,
        title_1: 'Торговым компаниям ',
        title_2: 'Выстроим любой сложный процесс обучения. Превратим скучные лекции в увлекательную игру.',
        content: 'Такой подход повысит мотивацию обучаемых и улучшит усвоение материала. Домашние задания с игровыми элементами не будут вызывать стресса. А система дополнительных бонусов сделает процесс обучения интересным и поможет пройти курс до конца. '
    },

    {
        imageID: 2,
        title_1: 'Заводам и фабрикам',
        title_2: 'Внедрим геймификацию, которая станет эффективным инструментом в управлении и обучении персонала',
        content: 'Создание виртуального рабочего места и других обучающих моделей помогут сотрудникам быстрее и качественнее усваивать новую информацию и получать практические навыки.'
    },

    {
        imageID: 3,
        title_1: 'Охранным предприятиям ',
        title_2: 'Геймификация повысит эффективность работы сотрудников и с легкостью обучит новичков.',
        content: 'Система рейтингов и бонусов повысит мотивацию сотрудников и простимулирует их к более активной работе. А удобные и легкие для восприятия виртуальные задания помогут проходить обучение даже тем, кто не любит учиться.'
    },

    {
        imageID: 4,
        title_1: 'Образовательным центрам ',
        title_2: 'Выстроим любой сложный процесс обучения. Превратим скучные лекции в увлекательную игру. ',
        content: 'Такой подход повысит мотивацию обучаемых и улучшит усвоение материала. Домашние задания с игровыми элементами не будут вызывать стресса. А система дополнительных бонусов сделает процесс обучения интересным и поможет пройти курс до конца. '
    },

    {
        imageID: 5,
        title_1: 'Мебельным предприятиям  ',
        title_2: 'Геймификация поможет сократить количество брака на производстве и обучать сотрудников с полным погружением в практику. ',
        content: 'В игровом обучении можно предусмотреть всё: систему рейтингов, проверку куратором, итоговую аттестацию. Это повысит производительность и рабочую атмосферу.'
    },
])

</script>

<style lang="scss" scoped>
.project-apply {
    &__container {
        padding: 96px 0;
        display: flex;
        flex-direction: column;
        gap: 36px;
    }

    &__center {
        width: 805px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }

    &__button {
        padding: 16px 20px;
        background-color: var(--gray);
        border-radius: 30px;
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        transition: 0.1s;

        &.active {
            background-color: #afafaf;
            color: var(--white);
        }
    }


    &__button-text {
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
    }

    &__card {
        display: flex;
        gap: 16px;

        animation: card 0.7s forwards;
    }

    &__card-left {
        min-width: 384px !important;
        max-width: 384px !important;
        height: 324px;
        background-position: center;
        background-size: cover;
        border-radius: 20px;
        display: flex;
        align-items: flex-end;
        padding: 0 0 30px 30px;
    }

    &__card-img-title {
        font-size: 32px;
        font-weight: 400;
        line-height: 31px;
        color: var(--white);
    }

    &__card-right {
        height: 324px;
        display: flex;
        flex-direction: column;
        padding: 30px;
        background-color: #fbfbfb;
        align-items: flex-start;
        justify-content: space-around;
    }

    &__text-title {
        font-size: 24px;
        font-weight: 300;
        line-height: 30px;
    }

    &__text-content {
        font-size: 20px;
        font-weight: 300;
        line-height: 25px;
        color: #7d7d7d;
    }
}

@keyframes card{
    0%{
        transform: scale(0.5) rotate(-10deg);
    }

    100%{
        transform: scale(1) rotate(0deg);
    }
}
</style>