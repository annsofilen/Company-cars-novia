<template>
  <div class="home min-vh-100">
    <HelloWorld class=" text-center  pt-4" msg="Car Management App"/>
    <div class="card card-body container">
      
      <p class="p-2">In this app you can reserve and return cars of the company</p>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
