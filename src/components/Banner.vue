<template>
    <div class="banner">
        <div class="banner__container">
            <div class="banner__content-wrapper">
                <h1 class="banner__title">
                    Корпоративное онлайн-обучение через геймификацию,
                    <span class="banner__primary-color">которое сэкономит время и прокачает скилы ваших
                        сотрудников</span>
                </h1>

                <p class="banner__text">Обучите сотрудников практическим навыкам через игровые методики</p>
            </div>

            <div class="banner__button-wrapper">
                <BaseButton btnClass="primary big">Обсудить проект</BaseButton>
                <BaseButton btnClass="gray big">Посмотреть демо</BaseButton>
            </div>

            <div class="banner__bottom">
                <div class="banner__card-wrapper">
                    <div class="banner__card">
                        <img src="@/assets/images/people_1.png" class="banner__card-img">
                    </div>

                    <div class="banner__card">
                        <div class="banner__card-row">
                            <BaseCard card-class="black" title-class="big" content-class="small">
                                <template #title>50%</template>

                                <template #content>Средний процент увеличения производительности компании</template>
                            </BaseCard>

                            <div class="banner__card-column">

                                <BaseCard card-class="gray" title-class="big" content-class="small">
                                    <template #title>60%</template>

                                    <template #content>Процент роста вовлеченности и мотивации сотрудников</template>
                                </BaseCard>

                                <BaseCard card-class="gray" title-class="medium" content-class="image">
                                    <template #title>Подходит для:</template>

                                    <template #content>
                                        <img style="width: 100%; height: auto;" src="@/assets/images/card-img.png">
                                    </template>
                                </BaseCard>
                            </div>
                        </div>
                    </div>

                    <div class="banner__card">
                        <div class="banner__card-row reverse">
                                <BaseCard card-class="primary" title-class="big" content-class="small">
                                    <template #title>30%</template>

                                    <template #content>Процент среднего улучшения усвоения информации</template>
                                </BaseCard>

                            <div class="banner__card-column">
                                <BaseCard card-class="gray" title-class="big" content-class="small">
                                    <template #title>89%</template>

                                    <template #content>Процент улучшения успеваемости при геймифицированном обучении</template>
                                </BaseCard>
                                <img src="@/assets/images/people_3.png" class="banner__card-img">
                            </div>
                        </div>
                    </div>

                    <div class="banner__card">
                        <img src="@/assets/images/people_2.png" class="banner__card-img">
                    </div>
                </div>

                <p class="banner__little-text">*Основано на данных исследований: eLearning Learning, <br /> компании
                    Mordor Intelligence, ScienceDirect, Ceros</p>
            </div>
            <HowDoWeAchieve></HowDoWeAchieve>

        </div>

    </div>
</template>

<script lang="ts" setup>
import BaseButton from './Base/BaseButton.vue';
import BaseCard from './Base/BaseCard.vue';
import HowDoWeAchieve from './HowDoWeAchieve.vue';

</script>

<style lang="scss" scoped>
.banner {

    background-color: #fbfbfb;
    border-radius: 0 0 50px 50px;

    &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 48px;
        padding: 25px 0 96px 0;

        @media (max-width: 768px) {
            padding-bottom: 40px;
        }
    }

    &__content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 32px;
        text-align: center;
    }

    &__title {
        font-size: 48px;
        font-weight: 300;
        line-height: 60px;

        @media (max-width: 768px) {
            font-size: 26px;
            line-height: 32.5px;
        }
    }

    &__text {
        font-size: 24px;
        font-weight: 300;
        line-height: 30px;
        color: #7d7d7d;

        @media (max-width: 768px) {
            font-size: 16px;
            line-height: 20px;
        }
    }

    &__button-wrapper {
        display: flex;
        align-items: flex-start;
        gap: 16px;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 8px;
        }
    }

    &__card-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        align-items: flex-start;

        @media(min-width: 769px) {
            grid-template-rows: repeat(3, .6fr);
        }

        @media(max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 8px;
        }
    }

    &__card {
        height: 100%;


        @media(min-width: 769px) {
            &:nth-of-type(2) {
                grid-area: 1 / 2 / span 2 / span 1;
            }

            &:nth-of-type(3) {
                grid-area: 2 / 1 / span 2 / span 1;
            }
        }

        @media (max-width: 768px) {
            &:nth-of-type(3) {
                grid-area: 4 / 1 / span 1 / span 1;
            }
        }
    }

    &__card-row {
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 16px;

        &.reverse {
            flex-direction: row-reverse;


            @media(max-width: 768px) {
                flex-direction: row;
            }
        }

        @media(max-width: 768px) {
            flex-direction: row-reverse;
        }
    }

    &__card-column {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 16px;

    }

    &__card-img {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
    }

    &__little-text {
        font-size: 14px;
        font-weight: 300;
        line-height: 17.5px;
        text-align: right;
        color: #7d7d7d;
        margin-top: -40px;

        @media (max-width: 768px) {
            font-size: 10px;
            line-height: 12.5px;
            margin-top: 10px;
        }
    }
}
</style>