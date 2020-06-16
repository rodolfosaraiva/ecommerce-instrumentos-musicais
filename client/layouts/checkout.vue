<template>
  <div class="layout">
    <navbar-checkout/>
    
    <div class="content-app">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>

    <footerBar/>
  </div>
</template>

<script>
import NavbarCheckout from '~/components/NavbarCheckout'
import footerBar from '~/components/footerBar'

export default {
  components: {
    NavbarCheckout,
    footerBar
  }
}
</script>
