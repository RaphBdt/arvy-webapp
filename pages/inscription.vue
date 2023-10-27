<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inscription</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse e-mail</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6B28E6] sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6B28E6] sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password-confirmation" class="block text-sm font-medium leading-6 text-gray-900">Confirmation du mot de passe</label>
            </div>
            <div class="mt-2">
              <input id="password-confirmation" name="password-confirmation" type="password-confirmation" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6B28E6] sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-[#6B28E6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6B28E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B28E6]">Connexion</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Pas encore inscrit ?
          {{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-[#6B28E6] hover:text-[#6B28E6]">Créez votre compte !</a>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  
  </style>