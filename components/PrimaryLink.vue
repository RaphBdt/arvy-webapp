<template>
    <NuxtLink class="text-primary font-medium border-b-2 border-primary" :to="link">{{ text }}</NuxtLink>
</template>

<script>
    export default {
        props: ['text', 'link']
    }
</script>

<style scoped>
    
</style>