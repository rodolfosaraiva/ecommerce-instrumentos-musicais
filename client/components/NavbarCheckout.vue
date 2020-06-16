<template>
  <header>
    <nav class="clearfix">
    	<div class="container">
        <div class="uk-grid uk-grid-medium">
          <div class="uk-width-auto">
        		<nuxt-link :to="{ name: 'home' }" class="block" @click.native="handleClick">
          		<img src="~/static/logo-ultrasom.svg" class="logo" height="50px" :alt="appName">
          	</nuxt-link>
          </div>

          <div class="holder-nav uk-width-expand">
            <div class="inner-nav">

        	    <ul class="menu">

                <li class="item-menu item-pedidos ml20">
                  <nuxt-link :to="{ name: 'home' }" class="link-menu" @click.native="handleClick">
                    <span class="f12 semibold">Meus pedidos</span>   
                  </nuxt-link>
                </li>               

                <li class="item-menu item-pedidos ml20">
                  <nuxt-link :to="{ name: 'home' }" class="link-menu" @click.native="handleClick">
                    <span class="f12 semibold">Minha conta</span>   
                  </nuxt-link>
                </li>

        	    </ul>
            </div>
          </div>

          <div class="holder-right uk-width-auto uk-grid uk-flex-middle">
              <div class="uk-width-auto">
                dúvidas?
                <a href="tel:01699999999" class="medium block mt5">16 9999-9999</a>            
              </div>
              <div class="uk-width-auto f14 uk-grid uk-grid-small uk-flex-middle">
                <div class="uk-width-auto">
                  <i class="fas fa-user-lock f20"></i>
                </div>
                <div class="uk-width-auto">
                  ambiente 
                  <div class="block mt5">100% seguro</div>
                </div>
              </div>
              <div class="uk-width-auto">
                <a href="javascript:" class="btn btn-font btn-purple" @click="diminuirFonte()" :class="{'disabled': minDisabled}">A-</a>
                <a href="javascript:" class="btn btn-font btn-purple" @click="aumentarFonte()":class="{'disabled': maxDisabled}">A+</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import fontsize from '~/mixins/fontsize.js'

export default {
  mixins: [fontsize],
 
  data: () => ({
    appName: process.env.appName
  }),

  methods: {
    handleClick (e) {
      e.target.blur()

      var element = document.activeElement
      if (element) {
        element.blur()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'client/assets/sass/_variables.scss';
  @import 'client/assets/sass/_mixins.scss';
	header {
    width: 100%;
		padding: 22px 0;
    z-index: 7;
    @include box-shadow(rgba(0, 0, 0, 0.15) 0px 1px 2px);
	}
  
  .logo {
    position: relative;
    margin: -3px 0;
  }

	.item-menu {
		display: inline-block;
		font-size: 15px;
		.link-menu {
			display: block;
			padding: 17px 10px;
      color: #FFF;
      @include bold();
      &:hover {
        color: $purple-light2;
      }
		}
	}

  .btn-font {
    display: inline-block;
    padding: 5px;
    margin: 0 3px 0 3px;
    font-size: 13px;
    color: #FFF;
    @include bold();
    @include border-radius(3px);
  }
</style>

