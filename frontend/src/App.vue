<template>
  <div class="bg-light">
    <ul class="nav nav-tabs">
      <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link> </li>
      <li><router-link class="nav-link" to="/about">About</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/cars">Cars</router-link> </li>
      <li><router-link class="nav-link" to="/trips">Trips</router-link></li>
    </ul>

    <router-view />
    <!-- Footer -->
<footer class="text-center text-lg-start bg-light text-muted">
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">



  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
    
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Company cars
          </h6>
          <p>
            Company cars -  so we don´t loose them
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Mariehamn</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            company-cars@education.ax
          </p>
          <p><i class="fas fa-phone me-3"></i> +358 010000</p>
          <p><i class="fas fa-print me-3"></i> +358 020000</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
   Company cars
  </div>
</footer>
  </div>
</template>

<style>

</style>
