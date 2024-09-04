<template>
    <form class="form" @submit.prevent="">
        <div class="form__top">
            <div class="form__input-wrapper">
                <label class="form__label">Ваше имя</label>
                <input type="text" :class="['form__input', { 'error': !form.name && isError }]" placeholder="Антон"
                    v-model="form.name">
                <p :class="['error-text']">Поле не может быть пустым</p>
            </div>

            <div class="form__input-wrapper">
                <label class="form__label">Ваш номер телефона</label>
                <input type="text" :class="['form__input', { 'error': !form.phoneNumber && isError }]"
                    placeholder="+7 (999) 999-9999" v-model="form.phoneNumber">
                <p :class="['error-text']">Поле не может быть пустым</p>
            </div>

            <div class="form__checkbox-wrapper">
                <BaseCheckbox size="16px" @is-active="isActive" :isError="isError"></BaseCheckbox>
                <label :class="['form__checkbox-text', { 'error': !form.isAccept && isError }]">Согласен с <a href="#"
                        class="form__checkbox-link">политикой конфиденциальности</a></label>
            </div>
        </div>

        <BaseButton @click="postForm()" btn-class="primary big">Отправить</BaseButton>
    </form>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseCheckbox from './BaseCheckbox.vue';

const form = reactive({
    name: '' as string,
    phoneNumber: '' as string,
    isAccept: false as boolean
})

const isError = ref(false);

const postForm = () => {
    if (form.name.length !== 0 && form.phoneNumber.length !== 0 && form.isAccept) {
        alert('Succsesfull')
    } else {
        isError.value = true;
    }
}

const isActive = (e: boolean) => {
    form.isAccept = e;
}

watch(form, (value) => {
    if (value.name && value.phoneNumber && value.isAccept) isError.value = false;
})

</script>

<style lang="scss" scoped>
@mixin flex-column {
    display: flex;
    flex-direction: column;
}

.form {
    @include flex-column;
    gap: 32px;

    &__top {
        @include flex-column;
    }

    &__input-wrapper {
        @include flex-column;
        padding: 10px 0 15px 0;
    }

    &__label {}

    &__input {
        width: 460px;
        border-bottom: 15px;
        background-color: transparent;
        border-bottom: 1px solid var(--black);
        font-size: 16px;
        font-weight: 400;
        line-height: 20.8px;
        padding-bottom: 5px;
        margin: 10px 0 5px 0;

        &.error {
            border-bottom-color: red;

            &+.error-text {
                display: block;
            }
        }


    }


    &__label {
        font-size: 16px;
        font-weight: 300;
        line-height: 20.8px;
        text-align: left;
        color: #8b8b8b;
    }

    &__checkbox-wrapper {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    &__checkbox-text {
        font-size: 14px;
        font-weight: 300;
        line-height: 17.5px;
        text-align: left;
        color: var(--black);

        &.error{
            color: red;

            .form__checkbox-link{
                color: red;
            }
        }
    }

    &__checkbox-link {
        font-weight: 400;
        color: var(--black);
    }
}

.error-text {
    display: none;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    text-align: left;
    color: red;
}
</style>