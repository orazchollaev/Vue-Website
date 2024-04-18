<template>
    <div class="tailored">
        <div class="tailored__container">
            <BaseTitle>
                Вашего направления нет в списке? <br />
                <span class="tailored__primary-color">Специально для вашего бизнеса</span>
            </BaseTitle>

            <div class="tailored__content">
                <div class="tailored__card" v-for="item in tailoredCardList">
                    <Icons :name="item.icon"></Icons>

                    <p class="tailored__card-content">{{ item.content }}</p>
                </div>

                <div class="tailored__last-card">
                    <p class="tailored__last-card-content">
                        Напишите нам для уточнения деталей сотрудничества. <br/>
                        <span class="tailored__primary-color">Гарантируем эффективность для бизнеса в любой сфере</span>
                    </p>

                    <BaseButton btnClass="primary small">Обсудить проект</BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from './Base/BaseButton.vue';
import BaseCard from './Base/BaseCard.vue';
import BaseTitle from './Base/BaseTitle.vue';
import { ref } from 'vue';
import Icons from './Base/icon/Icons.vue';

const tailoredCardList = ref([
    {
        icon: 'video',
        content: "Разработаем игровые уроки в аудио или видеоформате"
    },

    {
        icon: 'share',
        content: "Продумаем пошаговое обучение от урока к уроку без пропусков"
    },

    {
        icon: 'lightbulb',
        content: "Смоделируем реальные ситуации для отработки практических навыков"
    },

    {
        icon: 'users',
        content: "Внедрим игровых персонажей и многое другое"
    },

    {
        icon: 'medal',
        content: "Предложим систему бонусов за пройденные уровни"
    },

    {
        icon: 'box',
        content: "Предложим 3D-визуализацию для сложных обучений"
    },

    {
        icon: 'dialog',
        content: "Настроим проверку домашнего задания и возможность обратной связи"
    }
])

</script>

<style scoped lang="scss">
.tailored {

    &__container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    &__content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 23px;
        column-gap: 16px;
        
        @media (max-width: 1200px){
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 768px){
            grid-template-columns: 1fr;
            gap: 8px;
        }
    }

    &__card {
        padding: 25px 21px;
        background-color: #fbfbfb;
        border-radius: 20px;
        display: flex;
        gap: 16px;
        align-items: center;
    }

    &__card-icon{
        min-width: 35px;
        height: 35px;
        background-color: #aaa;
        border-radius: 12px;

        @media (max-width: 768px){
            min-width: 20px;
            height: 20px;
        }
    }

    &__card-content {
        font-size: 20px;
        font-weight: 300;
        line-height: 25px;

        @media (max-width: 768px){
            font-size: 14px;
            line-height: 17px;
        }
    }

    &__last-card{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        @media (min-width: 1201px){
            grid-area: 3 / 2 / span 1 / span 2;
        }

        @media (max-width: 768px){
            margin-top: 16px;
        }
    }

    &__last-card-content{
font-size: 20px;
font-weight: 300;
line-height: 25px;

@media (max-width: 768px){
    font-size: 16px;
    line-height: 20px;
}
    }
}
</style>