<template>
  <div v-lazy-container="{ selector: 'img[lazy]' }">
  	<div class="content-white clearfix">
  		
  		<div class="container text-center">
  			<div class="box-infos mt60 mb60">
				<h1 class="medium purple">Seu pedido nº1254 foi realizado</h1>
				<p class="mt20 mb40">
					Em breve você receberá um e-mail no endereço email@lojalegal.com.br com todos os detalhes do pedido. Aguardamos a confirmação do pagamento.
				</p>

				<div class="uk-grid">
					<div class="uk-width-1-2">
						<a class="btn btn-purple btn-block btn-medium">imprimir boleto</a>
					</div>
					<div class="uk-width-1-2">
						<nuxt-link :to="{ name: 'home'}" class="btn btn-secundary btn-block btn-medium">continuar comprando</nuxt-link>
					</div>
				</div>
			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import fontsize from '~/mixins/fontsize.js'

export default {
	layout: 'checkout',
  	directives: {mask},

	mixins: [fontsize],
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

	.box-infos {
		display: inline-block;
		max-width: 500px;
	}
</style>