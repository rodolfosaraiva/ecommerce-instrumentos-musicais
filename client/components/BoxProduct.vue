<template>
	<div class="box-product f16">
		<div class="relative">
			<img :src="require('~/static/products/'+ produto.image)" :alt="produto.name" class="img-fluid w-100 block">
			<div class="holder-infos text-center">
				<stars class="stars mb10"></stars>
				<div class="product-name">{{ produto.name }}</div>
				<div class="prices black mt15">
					<span class="mr5 line-t">{{ produto.originalPrice }}</span> <span class="green">{{ produto.discountPrice }}</span>
					<span class="parcels black block mt5">
						{{ produto.parcels }}
					</span>
				</div>
			</div>
			<nuxt-link :to="{ name: 'produto' }" class="link-abs">{{ produto.name }}</nuxt-link>
		</div>
	</div>
</template>

<script>
import Stars from '~/components/Stars'

export default {
	components: {Stars},
	props: ["produto"]
}
</script>


<style lang="scss" scoped>
	@import 'client/assets/sass/_variables.scss';
	@import 'client/assets/sass/_mixins.scss';
	
	.box-product {
		position: relative;
		color: $black;
		&:hover {
			@include opacity(0.7);
			@include transition(all 0.2s);
		}
		.product-name {
			font-size: 16px;
			line-height: 20px;
		}
	}

	.stars {
		font-size: 11px;
	}

</style>