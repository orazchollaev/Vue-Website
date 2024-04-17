<template>
    <h1 class="title"><slot></slot></h1>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.title {
        font-size: 48px;
        font-weight: 300;
        line-height: 60px;

        @media (max-width: 768px) {
            font-size: 24px;
            line-height: 30px;
        }
    }
</style>