<template>
    <div class="project-created">
        <div class="project-created__container">
            <div class="project-created__top">
                <div class="project-created__content">
                    <div class="project-created__content-left">
                        <BaseTitle>Как происходит создание продукта?</BaseTitle>
                    </div>
                    <div class="project-created__content-right">
                        <BaseCard card-class="white-gray" content-class="medium" title-class="double">
                            <template #title>
                                <p class="small-title">Этап 1</p>

                                <h1 class="big-title">Обсуждаем задачу</h1>
                            </template>

                            <template #content>
                                <p class="content-text">Созваниваемся и обсуждаем проект. Погружаемся, чтобы выяснить
                                    все подробности</p>

                                <div class="content-img-wrapper">
                                    <div style="grid-area: 1 / 1 / span 1 / span 1;"><img class="content-img"
                                            src="@/assets/images/message_1.png"></div>
                                    <div style="grid-area: 2 / 2 / span 1 / span 1; margin-left: auto;"><img
                                            class="content-img" src="@/assets/images/message_2.png"></div>
                                </div>
                            </template>
                        </BaseCard>

                        <BaseCard card-class="white-gray" content-class="medium" title-class="double">
                            <template #title>
                                <p class="small-title">Этап 2</p>

                                <h1 class="big-title">Формируем варианты решения</h1>
                            </template>

                            <template #content>
                                <p class="content-text">Продумываем, какие игровые механики можем предложить, чтобы
                                    выстроить процесс обучения максимально продуктивно</p>
                            </template>
                        </BaseCard>

                        <BaseCard card-class="white-gray" content-class="medium" title-class="double">
                            <template #title>
                                <p class="small-title">Этап 3</p>

                                <h1 class="big-title">Согласовываем с заказчиком</h1>
                            </template>

                            <template #content>
                                <p class="content-text">Презентуем идею, получаем одобрение, обсуждаем сроки и
                                    стоимость. Подписываем договор</p>

                                <img class="content-image" src="@/assets/images/paper.png">
                            </template>
                        </BaseCard>

                        <BaseCard card-class="white-gray" content-class="medium" title-class="double">
                            <template #title>
                                <p class="small-title">Этап 4</p>

                                <h1 class="big-title">Приступаем к разработке</h1>
                            </template>

                            <template #content>
                                <p class="content-text">В работу активно включаются все специалисты, чтобы ваша
                                    обучающая платформа получилась именно такой, как задумывалась</p>
                            </template>
                        </BaseCard>

                        <BaseCard card-class="white-gray" content-class="medium" title-class="double">
                            <template #title>
                                <p class="small-title">Этап 2</p>

                                <h1 class="big-title">Тестируем и передаем коды доступа</h1>
                            </template>

                            <template #content>
                                <p class="content-text">Отлаживаем процесс, исключаем возможные баги. Полностью передаем
                                    продукт клиенту</p>
                            </template>
                        </BaseCard>
                    </div>
                </div>
            </div>

            <div class="projcet-created__bottom">
                <p class="small-title">Результат:</p>
                <h1 class="big-title">
                    Вы получаете <span class="project-created__primary-color">уникальную обучающую платформу</span> с геймификацией, а еще сокращаете время на обучение,
                    <span class="project-created__primary-color">увеличиваете мотивацию сотрудников и прибыль</span> вашей компании.
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseCard from './Base/BaseCard.vue';
import BaseTitle from './Base/BaseTitle.vue';


</script>

<style lang="scss" scoped>
.project-created {

    &__container {
        display: flex;
        flex-direction: column;
        padding: 0 0 96px 0;
        gap: 62px;
    }


    &__content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        @media (max-width: 1024px){
            flex-direction: column;
            align-items: center;
            gap: 40px;   
        }
    }

    &__content-right,
    &__content-left {
        flex: 1 1 100%;
    }

    &__content-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
}

.small-title {
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    color: #7d7d7d;

    @media (max-width: 768px){
        font-size: 10px;
        line-height: 12.5px;
    }
}

.big-title {
    font-family: Geologica;
    font-size: 24px;
    font-weight: 300;
    line-height: 30px;
    text-align: left;
    margin-top: 8px;

    @media (max-width: 768px){
        font-size: 16px;
        line-height: 20px;
    }
}

.content-text {
    font-size: 20px;
    font-weight: 300;
    line-height: 25px;
    color: #7d7d7d;

    @media (max-width: 768px){
        font-size: 14px;
        line-height: 17.5px;
    }
}

.content-img-wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 58px;

    img{
        width: 100%;
    height: auto;
    }

    @media (max-width: 768px){
        margin-top: 26px;
    }
}

.content-image {
    width: 100%;
    height: auto;
    margin-top: 58px;

    @media (max-width: 768px){
        margin-top: 26px;
    }
}
</style>