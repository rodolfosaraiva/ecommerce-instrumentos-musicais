<template>
  <div class="layout">
    <navbar/>
    
    <div class="content-app">
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>

    <footerBar/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import footerBar from '~/components/footerBar'

export default {
  components: {
    Navbar,
    footerBar
  }
}
</script>
