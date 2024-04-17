<template>
    <header class="header">

        <div class="header__container">
            <div class="header__left">
                <img src="@/assets/images/logo.png" alt="logo" class="header__logo">
            </div>

            <div class="header__center">
                <ul class="header__menu-list">
                    <li class="header__menu-item">
                        <RouterLink to="/" class="header__menu-link" active-class="header__menu-link-active">Для кого?
                        </RouterLink>
                    </li>

                    <li class="header__menu-item">
                        <RouterLink to="/" class="header__menu-link" active-class="header__menu-link-active">Этапы
                        </RouterLink>
                    </li>

                    <li class="header__menu-item">
                        <RouterLink to="/" class="header__menu-link" active-class="header__menu-link-active">Кейсы
                        </RouterLink>
                    </li>

                    <li class="header__menu-item">
                        <RouterLink to="/" class="header__menu-link" active-class="header__menu-link-active">Команда
                        </RouterLink>
                    </li>

                    <li class="header__menu-item">
                        <RouterLink to="/" class="header__menu-link" active-class="header__menu-link-active">Отзывы
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <div class="header__right">
                <BaseButton btnClass="gray small">Войти</BaseButton>
                <BaseButton btnClass="primary small">Связаться</BaseButton>
            </div>
        </div>

    </header>
</template>

<script lang="ts" setup>

import BaseButton from './Base/BaseButton.vue';

</script>

<style lang="scss" scoped>
.header {

    &__container {
        padding: 24px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 768px){
            gap: 8px;
        }
    }

    &__logo {
        width: 72px;
        height: 53.2px;
        object-fit: cover;
        object-position: center;
        cursor: pointer;
        transition: 0.2s;
        
        &:hover{
            transform: scale(1.05);
        }

        @media(max-width: 768px){
            width: 65px;
            height: 47.7px;
        }
    }

    &__center{
        @media(max-width: 768px){
            display: none;
        }
    }

    &__menu-list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        list-style: none;
    }

    &__menu-link {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        color: var(--black);
        text-decoration: none;

        &:hover{
            color: var(--primary);
            text-decoration: underline var(--primary);
        }
    }

    &__right{
        display: flex;
        gap: 8px;
    }
}
</style>