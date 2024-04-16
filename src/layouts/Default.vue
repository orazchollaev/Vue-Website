<template>
    <div class="wrapper">

        <Header/>

        <main class="wrapper__main">
            <slot></slot>
        </main>

        <Footer/>
    </div>
</template>

<script lang="ts" setup>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>

<style lang="scss" scoped>

</style>