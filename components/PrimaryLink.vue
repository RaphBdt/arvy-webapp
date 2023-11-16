<template>
    <NuxtLink class="text-purple-600 font-medium border-b-2 border-purple-600" :to="link">{{ text }}</NuxtLink>
</template>

<script>
    export default {
        props: ['text', 'link']
    }
</script>

<style scoped>
    
</style>