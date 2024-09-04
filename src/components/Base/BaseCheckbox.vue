<template>
    <div :class="['checkbox', {'error': isError && !isActive}]"
    :style="{width: size, height: size}"
    @click="toggleActive()">
        <div :class="['checkbox__fill', {'active': isActive}]"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    size: string,
    isError: boolean
}>()

const emit = defineEmits<{
    (e: 'isActive', value: boolean): void
}>()

//--------------------------------------

const isActive = ref(false);

const toggleActive = () => {
    isActive.value = !isActive.value;

    emit('isActive', isActive.value);
}


</script>

<style lang="scss" scoped>

.checkbox{
    background-color: transparent;
    border: 1px solid var(--black);
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.error{
        border-color: red;
    }

    &__fill{
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: var(--primary);
        transition: 80ms;
        border-radius: 5px;

        &.active{
            opacity: 0.8;
        }
    }
}

</style>