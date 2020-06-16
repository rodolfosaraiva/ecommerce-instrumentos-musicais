<template>
  <div v-lazy-container="{ selector: 'img[lazy]' }">
  	<section id="home">
  		<nuxt-link :to="{ name: 'produto' }" class="block" >
  			<img :src="require('~/static/home/banner.jpg')" alt="Violão Strinberg Folk Elétrico SD 200c + Capa por apenas R$ 635,00" class="img-fluid block">
  		</nuxt-link>
  	</section>
	
	<labels></labels>
	
	<div id="home-categories" class="mt20 mb60">
		<div class="container">
			<div class="uk-grid">
				<div class="uk-width-1-1 uk-width-1-2@s">
					<nuxt-link to="produto" class="block">
						<img :src="require('~/static/home/category-banners/microfones.jpg')" alt="Veja nossa sessão de microfones" class="img-fluid block w-100">
					</nuxt-link>
				</div>				
				<div class="uk-width-1-1 uk-width-1-2@s">
					<nuxt-link to="produto" class="block">
						<img :src="require('~/static/home/category-banners/cd-e-dvd.jpg')" alt="Veja nossa sessão de CD's e DVD's" class="img-fluid block w-100">
					</nuxt-link>
				</div>
			</div>	
		</div>
	</div>

	<div class="content-white">
		<list-products title="RECOMENDAMOS PARA VOCÊ"></list-products>
		<list-products title="LANÇAMENTOS"></list-products>
	</div>

  </div>
</template>

<script>
import Labels from '~/components/Labels'
import ListProducts from '~/components/ListProducts'
import fontsize from '~/mixins/fontsize.js'

export default {
	mixins: [fontsize],
	components: {Labels, ListProducts},
	head () {
		return { 
			title: process.env.appName,
			bodyAttrs: {
				class: "fontsize_" + this.$store.state.fontsize.fontsize
			}
		}
	},

	data: () => ({
		appName: process.env.appName
	}),

	methods: {

	}

}
</script>


<style lang="scss" scoped>
	@import 'client/assets/sass/_variables.scss';
	@import 'client/assets/sass/_mixins.scss';

	// Section HOME
	#home {
		position: relative;
		img {
			width: 100%;
		}
	}


</style>