<template>
	<div class="container">
		<div class="uk-grid uk-flex-between holder-labels">
			<div class="item-label">
				<span class="f18 mb5 black block">FRETE GRÁTIS BRASIL</span>
				<span class="f15 regular">compras acima de R$ 199</span>
			</div>
			<div class="item-label">
				<span class="f18 mb5 black block">ATÉ 12X SEM JUROS</span>
				<span class="f15 regular">no cartão de crédito</span>	
			</div>			
			<div class="item-label">
				<span class="f18 mb5 black block">10% DE DESCONTO</span>
				<span class="f15 regular">no boleto ou depósito</span>	
			</div>			
			<div class="item-label">
				<span class="f18 mb5 black block">30 DIAS</span>
				<span class="f15 regular">para troca</span>	
			</div>			
			<div class="item-label uk-grid-auto">
				<span class="f18 mb5 black block">16 9 9999-9999</span>
				<span class="f15 regular">whatsapp</span>	
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: []
}
</script>


<style lang="scss" scoped>
	@import 'client/assets/sass/_variables.scss';
	@import 'client/assets/sass/_mixins.scss';
	
	
	.holder-labels {
		padding: 15px 0;
	}

	.item-label {
		margin: 10px 0;
	}


</style>