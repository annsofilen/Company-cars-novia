<template>
  <div class="home">
    <HelloWorld class="ms-4" msg="Car Management App"/>
    <div class="card card-body">
      
      <p class="ms-4">In this app you can reserve and return cars of the company</p>
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
