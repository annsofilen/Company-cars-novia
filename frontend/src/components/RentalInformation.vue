<template>
    <div class="ms-4">
      <h1>Rental information</h1>
      <p>If you want to rent a car, press "Take car" in order to make it unavailable.</p>
      <p>Press "Return car", enter how far you drove, and return it when you are back.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RentalInformation',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  
  </style>
  