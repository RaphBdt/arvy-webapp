<template>
    <NuxtLink :to="link" class="flex rounded-lg items-center justify-center h-12" :class="{ 'custom-btn-shadow': hasShadow, 'text-white': isDark }" :style="'background-color: ' + backgroundColor">
        <img v-if="content === 'Google'" src="/img/icons/logo-google.png" alt="Logo Google" class="h-5 mr-3" />
        <img v-else-if="content === 'Apple'" src="/img/icons/logo-apple.png" alt="Logo Apple" class="h-5 mr-3" />
        {{ content }}
    </NuxtLink>
</template>

<script>
    export default {
        props: ['backgroundColor', 'isDark', 'link', 'content', 'hasShadow']
    }
</script>

<style scoped>
    .custom-btn-shadow {
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.10);
        border: 1px solid var(--outline-outline-light, #B0B0B0);
    }
</style>