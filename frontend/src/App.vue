<template>
  <div class="bg-light ms-4 p-6">
    <ul class="nav nav-tabs">
      <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link> </li>
      <li><router-link class="nav-link" to="/about">About</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/cars">Cars</router-link> </li>
      <li><router-link class="nav-link" to="/trips">Trips</router-link></li>
    </ul>

    <router-view />
  </div>
</template>

<style>

</style>
