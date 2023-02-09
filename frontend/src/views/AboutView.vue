<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RentalInformation></RentalInformation>
  </div>
</template>

<script>
import RentalInformation from '@/components/RentalInformation.vue';

export default {
  name: 'AboutView',
  components: {
    RentalInformation
  }
}
</script>