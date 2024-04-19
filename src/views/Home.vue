<template>
    <div class="home">
        <Banner/>
        <ProjectApply></ProjectApply>
        <ProjectTailored></ProjectTailored>
        <ProjectCreated></ProjectCreated>
        <InteractiveTraining></InteractiveTraining>
    </div>
</template>

<script lang="ts" setup>

import Banner from '@/components/Banner.vue';
import BaseButton from '@/components/Base/BaseButton.vue';
import InteractiveTraining from '@/components/InteractiveTraining.vue';
import ProjectApply from '@/components/ProjectApply.vue';
import ProjectCreated from '@/components/ProjectCreated.vue';
import ProjectTailored from '@/components/ProjectTailored.vue';

</script>

<style lang="scss" scoped>

</style>