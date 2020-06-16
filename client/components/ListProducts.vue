<template>
	<div class="list-products container">
		<h2 class="purple black text-center mb40">{{ title }}</h2>
		<div class="uk-grid">
			<box-product class="uk-width-1-2 uk-width-1-4@s" :produto="produto" :key="key" v-for="(produto, key) in produtos"></box-product>
		</div>
	</div>
</template>

<script>
import BoxProduct from '~/components/BoxProduct'

export default {
	components: {BoxProduct},
	props: ['title'],

	data: () => ({
		produtos: [{
			image: 'ukelele.jpg',
			name: 'Ukulele Concert Seizi Bora-Bora Elétrico com Bag – Koa',
			originalPrice: 'R$ 449,90',
			discountPrice: 'R$ 279,90',
			parcels: 'ou 10x de R$ 27,90'
		},{
			image: 'violao.jpg',
			name: 'Violão Michael VM19E Nylon Acústico - Natural Fosco',
			originalPrice: 'R$ 449,90',
			discountPrice: 'R$ 279,90',
			parcels: 'ou 10x de R$ 27,90'
		},{
			image: 'piano.jpg',
			name: 'Piano Digital Casio Stage CDP S100',
			originalPrice: 'R$ 449,90',
			discountPrice: 'R$ 279,90',
			parcels: 'ou 10x de R$ 27,90'
		},{
			image: 'caixa.jpg',
			name: 'Caixa Amplificada Frahm LC250 APP Bluetooth 100Wrms',
			originalPrice: 'R$ 449,90',
			discountPrice: 'R$ 279,90',
			parcels: 'ou 10x de R$ 27,90'
		}]
	})

}
</script>


<style lang="scss" scoped>
	@import 'client/assets/sass/_variables.scss';
	@import 'client/assets/sass/_mixins.scss';
	
	.list-products {
		padding: 70px 0;
	}

</style>