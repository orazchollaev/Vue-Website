<template>
    <div class="interactive-training">
        <div class="interactive-training__container">
            <BaseTitle>Интерактивное обучение закроет сразу несколько задач</BaseTitle>

            <div class="interactive-training__card-wrapper">
                <div class="interactive-training__card">
                    <div class="interactive-training__card-row">
                        <BaseCard card-class="primary" title-class="medium" content-class="small">
                            <template #title>
                                <Icons name="history"></Icons>

                                <p>Сократит время
                                    на обучение
                                    и увеличит прибыль</p>
                            </template>

                            <template #content>
                                За счет формата микрообучения сложные темы будут усваиваться быстрее без потери
                                качества. Мы правильно выстраиваем пошаговую систему уроков и много времени уделяем
                                практике
                            </template>
                        </BaseCard>
                        <BaseCard card-class="gray" title-class="medium" content-class="small">
                            <template #title>
                                <Icons name="users"></Icons>

                                <p>Разгрузит опытных сотрудников</p>
                            </template>

                            <template #content>
                                Вам не придется отрывать от работы сотрудников, чтобы передать знания новичкам или
                                стажерам. Обучение можно выстроить так, что помощь потребуется только
                                на этапе проверки знаний
                            </template>
                        </BaseCard>
                    </div>
                </div>

                <div class="interactive-training__card">
                    <img class="interactive-training__card-img" src="@/assets/images/people_4.png">
                </div>

                <div class="interactive-training__card">
                    <img class="interactive-training__card-img" src="@/assets/images/people_5.png">
                </div>

                <div class="interactive-training__card">
                    <div class="interactive-training__card-row">
                        <BaseCard card-class="gray" title-class="medium" content-class="small">
                            <template #title>
                                <Icons name="share"></Icons>

                                <p>Познакомит персонал
                                    с регулярными обновлениями</p>
                            </template>

                            <template #content>
                                Вы сможете оперативно обновлять материалы обучения, оповещать всех сотрудников о
                                нововведениях и изменениях. Организовывать контроль знаний и награждать лучших
                            </template>
                        </BaseCard>
                        <BaseCard card-class="black" title-class="medium" content-class="small">
                            <template #title>
                                <Icons name="hammer"></Icons>

                                <p>Поможет снизить количество брака</p>
                            </template>

                            <template #content>В игровой симулятор можно внедрить реальные рабочие ситуации. Это поможет
                                значительно снизить количество ошибок или вовсе избежать их при непосредственном выходе
                                сотрудника на рабочее место
                            </template>
                        </BaseCard>
                    </div>
                </div>

                <div class="interactive-training__card">
                    <div class="interactive-training__card-row">
                        <BaseCard card-class="gray" title-class="medium" content-class="small">
                            <template #title>
                                <Icons name="city"></Icons>

                                <p>Создаст единый стандарт обучения в филиалах</p>
                            </template>

                            <template #content>Обучение с геймификацией создаст единые критерии оценки и стандарты
                                обучения. Это сделает команду сплоченнее и поможет компании выйти на новые показатели
                            </template>
                        </BaseCard>
                        <BaseCard card-class="primary" title-class="medium" content-class="small">
                            <template #title>
                                <Icons name="course_up"></Icons>

                                <p>
                                    Повысит мотивацию сотрудников
                                    и авторитетность компании</p>
                            </template>

                            <template #content>
                                Внедрение соревновательных игровых элементов увеличит вовлеченность сотрудников.
                                Нестандартный подход
                                к обучению улучшит имидж, создаст репутацию прогрессивной и современной компании
                            </template>
                        </BaseCard>
                    </div>
                </div>

                <div class="interactive-training__card">
                    <h2 class="interactive-training__text">
                        И это далеко <span class="interactive-training__primary-color">не полный список задач</span>,
                        которые решает
                        обучение с геймификацией.
                    </h2>
                </div>
            </div>

            <div class="interactive-training__bottom">
                <div class="interactive-training__bottom-left">
                    <BaseTitle>
                        Не понимаете,
                        как геймификация поможет вашему бизнесу?
                    </BaseTitle>

                    <p class="interactive-training__bottom-text">Оставьте контакт — и мы расскажем о возможных вариантах
                    </p>
                </div>

                <div class="interactive-training__bottom-right">
                    <BaseForm></BaseForm>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import BaseTitle from './Base/BaseTitle.vue';
import BaseCard from './Base/BaseCard.vue';
import Icons from './Base/icon/Icons.vue';
import BaseForm from './Base/BaseForm.vue';

</script>

<style lang="scss" scoped>
.interactive-training {

    background-color: #fbfbfb;

    &__container {
        display: flex;
        flex-direction: column;
        gap: 48px;
        padding-bottom: 96px;
    }

    &__card-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        align-items: flex-start;

        @media(min-width: 1201px) {
            grid-template-rows: repeat(4, auto);
        }

        @media (max-width: 1200px) {
            width: 768px;
            grid-template-columns: 1fr;
            margin: auto;
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    &__card-row {
        display: flex;
        gap: 16px;
        align-items: center;
        height: 100%;
        overflow: hidden;

        @media (max-width: 1200px) {
            flex-direction: row-reverse;
        }

    }

    &__card {
        height: 100%;

        @media (min-width: 1201px) {
            &:nth-of-type(1) {
                grid-area: 1 / 1 / span 1 / span 1;
            }

            &:nth-of-type(2) {
                grid-area: 1 / 2 / span 2 / span 1;
            }

            &:nth-of-type(3) {
                grid-area: 2 / 1 / span 1 / span 1;
            }

            &:nth-of-type(4) {
                margin-top: -225px;
                grid-area: 3 / 2 / span 5 / span 1;
            }

            &:nth-of-type(6) {
                margin-top: 220px;
                margin-bottom: -20px;
                grid-area: 3 / 2 / span 1 / span 1;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        @media (max-width: 1200px) {
            &:nth-of-type(3) {
                grid-area: 1 / 1 / span 1 / span 1;

            }
        }

        &:nth-of-type(5) {
            div {
                @media (max-width: 1200px) {
                    flex-direction: column;
                }
            }
        }
    }

    &__text {
        padding: 42px;
        font-size: 32px;
        font-weight: 300;
        line-height: 40px;
        text-align: left;

        @media (max-width: 1201px) {
            padding: 8px;
            font-size: 16px;
            font-weight: 300;
            line-height: 20px;
        }
    }

    &__card-img {
        width: 100%;
        height: auto;
        object-position: center;
        object-fit: cover;
    }

    &__bottom {
        display: flex;
    }

    &__bottom-left {
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    &__bottom-text {
        font-size: 32px;
        font-weight: 300;
        line-height: 40px;
        color: var(--primary);
    }
}
</style>