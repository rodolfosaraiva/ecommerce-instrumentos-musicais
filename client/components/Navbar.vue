<template>
  <header>
    <nav class="clearfix">
    	<div class="container">
        <div class="uk-grid uk-grid-medium">
      		<nuxt-link :to="{ name: 'home' }" class="uk-width-auto" @click.native="handleClick">
        		<img src="~/static/logo-ultrasom.svg" class="logo" height="50px" :alt="appName">
        	</nuxt-link>

          <div class="holder-nav uk-width-auto">
            <div class="inner-nav">

        	    <ul class="menu">
        	    	<li v-for="item in navItems" class="item-menu">
        	    		<nuxt-link :to="{ name: item.url }" @click.native="handleClick" class="link-menu upper">
        	    			{{ item.title }}
        	    		</nuxt-link>
        	    	</li>

        	    	<li class="item-menu item-pedidos pull-right ml20">
        	    		<a href="javascript:" target="_blank" class="link-menu">
                  <span class="f12 semibold">Meus pedidos</span>   
                  </a>
        	    	</li>

        	    </ul>
            </div>
          </div>

          <div class="holder-right uk-width-expand">
            <div class="uk-grid uk-grid-small">
              <div class="uk-width-expand">
                <form action="/produto" id="form-search" class="pull-right">
                  <input type="text" placeholder="buscar produtos">
                  <button type="submit" class="btn-search"><i class="fas fa-search"></i></button>
                </form>
              </div>
              <div class="holder-cart uk-width-auto">
                <nuxt-link :to="{ name: 'carrinho' }" class="white cart-link">
                  <i class="fas fa-shopping-cart"></i>
                  <span class="cart-qtd">2</span>
                </nuxt-link>
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
    appName: process.env.appName,
    navItems: [{
    	title: 'Aúdio',
    	url: 'produto'
    },{
    	title: 'Cordas',
    	url: 'produto'
    },{
    	title: 'Percussão',
    	url: 'produto'
    },{
    	title: 'Teclas',
    	url: 'produto'
    },{
      title: 'Sopro',
      url: 'produto'
    }],

    showNav: false
  }),

  watch: {
    $route (newValue) {
      this.showNav = false
    }
  },

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

  #form-search {
    position: relative;
    .btn-search {
      position: absolute;
      top: 50%;
      right: 15px;
      margin-top: -8px;
      font-size: 14px;
      color: $black;
    }
  }

  .holder-cart {
    .cart-link {
      display: block;
      position: relative;
      padding: 12px 15px 12px 10px;
      font-size: 20px;
    }
    .cart-qtd {
      position: absolute;
      top: 3px;
      right: -5px;
      padding: 4px 6.5px;
      font-size: 11px;
      color: #FFF;
      background: #ff3455;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }
  }
  .btn-font {
    display: inline-block;
    padding: 5px;
    margin: 14px 3px 0 3px;
    font-size: 13px;
    color: #FFF;
    @include bold();
    @include border-radius(3px);
  }
</style>

<style lang="scss">
    html.active-nav {
      position: relative;
      overflow: hidden;
    }
</style>
