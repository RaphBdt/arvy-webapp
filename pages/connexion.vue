<template>
    <div class="grid grid-cols-12 mt-[1vh]">
        <div class="col-start-1 col-end-6 flex items-center px-2">
            <img src="/img/auth-picture.jpg" alt="Une femme en train de pratiquer du CrossFit" class="object-cover rounded-xl h-[98vh] w-full block">
        </div>

        <div class="col-start-6 col-end-13 flex align-center flex-col w-1/2 mx-auto">
            <img src="/img/logo-arvy.png" alt="Logo Arvy" class="block w-52 mt-16 mx-auto">
            <h1 class="text-center mt-10 text-[#525C76] text-4xl font-semibold">👋 Bienvenue sur Arvy</h1>
            <p class="text-[#B0B0B0] text-center mt-4">Connectez-vous pour continuer l'aventure</p>
            
            <div class="flex justify-between mt-5">
                <Button class="w-1/2 mr-3" backgroundColor="white" link="#" content="Google" :isDark="false" :hasShadow="true" />
                <Button class="w-1/2 ml-3" backgroundColor="white" link="#" content="Apple" :isDark="false" :hasShadow="true" />
            </div>

            <div class="flex items-center mt-5">
                <div class="separator"></div>
                <p class="mx-5 text-[#B0B0B0]">ou</p>
                <div class="separator"></div>
            
            </div>
            <form>
                <input type="text" id="email" class="bg-white border border-[#B0B0B0] text-gray-900 rounded-lg focus:outline-primary block w-full p-2.5 mt-5" placeholder="Adresse mail" required>
                <input type="text" id="password" class="bg-white border border-[#B0B0B0] text-gray-900 rounded-lg focus:outline-primary block w-full p-2.5 mt-3" placeholder="Mot de passe" required>
                <div class="flex items-center justify-between mb-4 mt-4">
                    <div class="flex items-center">
                        <input id="stay-connected" type="checkbox" value="" class="w-4 h-4 accent-primary bg-gray-100 border-gray-300 rounded focus:outline-primary">
                        <label for="stay-connected" class="ml-2 text-sm font-medium text-[#B0B0B0] dark:text-gray-300">Rester connecté</label>
                    </div>
                    <PrimaryLink link="#" text="Mot de passe oublié ?" />
                </div>
                <Button backgroundColor="#833BF9" link="#" content="Connexion" :isDark="true" :hasShadow="false" class="mt-5" />
            </form>
            <p class="text-center text-[#B0B0B0] mt-5">Rejoignez-nous dès maintenant et découvrez tout ce qu'Arvy a à offrir !"</p>
            <div class="flex justify-center mt-5">
                <PrimaryLink link="#" text="Pas encore inscrit ?" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    useHead({
        bodyAttrs: {
            class: 'bg-customGray font-body'
        }
    })
</script>

<style>
    
</style>