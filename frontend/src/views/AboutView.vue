<template>
  <div class="about container vh-100">
    <HelloWorld class=" text-center  pt-4" msg="About"/>

    <div class="card card-body">

      <p class="ms-4">In this app you can reserve and return cars of the company</p>
    </div>

</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'AboutView',
  components: {
    HelloWorld
  }
}
</script>