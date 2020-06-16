<template>
  <footer>
  	<div class="inner-footer">
	    <div class="container">
	    	<div class="text-center">
				<div class="f14 bold">FORMAS DE PAGAMENTO</div>
				<div class="clearfix mt20">
					<img :src="require('~/static/payments.png')" alt="Formas de pagamento: Visa, Mastercard, Discover, Elo, American Express" class="inline-block payments-img">
				</div>
			</div>
			<hr class="mt60 mb60">
			<div class="uk-grid uk-flex-between">
				<div class="item-footer">
					<div class="f20 white black">ONDE ESTAMOS</div>
					<p class="mt20 f13">
						Rua da loja legal, 372 <br>São Carlos-SP - CEP 1350-000
					</p>
					<p class="mt10 f13 bold">
						Loja legal LTDA ME <br>CNPJ 99999999/8888-99
					</p>
				</div>				
				<div class="item-footer">
					<div class="f20 white black">ATENDIMENTO</div>
					<p class="mt20 f13">
						<span class="bold">16 9 9999-9999</span> (WHATSAPP)
					</p>
					<p class="mt10 f13 bold">
						de seg. a sex. das 8h às 18h
					</p>
					<a href="mailto:sac@lojalegal.com.br" class="bold">sac@lojalegal.com.br</a>
				</div>				

				<div class="item-footer">
					<div class="f20 white black mb20">INSTITUCIONAL</div>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Quem somos</nuxt-link>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Política de privacidade</nuxt-link>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Trocas e devoluções</nuxt-link>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Formas de pagamento</nuxt-link>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Formas de entrega</nuxt-link>
				</div>

				<div class="item-footer">
					<div class="f20 white black mb20">SEÇÕES</div>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Aúdio</nuxt-link>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Cordas</nuxt-link>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Percussão</nuxt-link>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Teclas</nuxt-link>
					<nuxt-link :to="{ name: 'produto'}" class="block mt10 f14">Sopro</nuxt-link>
				</div>

				<div class="item-footer">
					<div class="f20 white black mb20">MÍDIAS</div>
					<div class="uk-grid uk-grid-small">
						<div>
							<nuxt-link :to="{ name: 'produto'}" class="box-social"><i class="fab fa-facebook-f"></i></nuxt-link>
						</div>
						<div>
							<nuxt-link :to="{ name: 'produto'}" class="box-social"><i class="fab fa-instagram"></i></nuxt-link>
						</div>
					</div>
				</div>
			</div>

			<hr class="mt60 mb50">

			<div class="text-center f11 bold">feito por rodolfosanches</div>
	    </div>
    </div>
    
  </footer>
</template>

<script>

export default {
  data: () => ({
    appName: process.env.appName
  }),

  methods: {

  }
}
</script>

<style lang="scss" scoped>
	@import 'client/assets/sass/_mixins.scss';
	@import 'client/assets/sass/_variables.scss';
	.payments-img {
		max-width: 100%;
	}
	.inner-footer {
		padding: 50px 0;
	}
	.box-social {
		display: inline-block;
	    width: 46px;
	    height: 46px;
	    text-align: center;
	    font-size: 17px;
	    line-height: 44px;
	    color: #fff;
	    border: 2px solid $white;
	    @include border-radius(5px);
	    &:hover {
	    	background: $white;
	    	color: $black;
	    }
	}

	.item-footer {
		margin: 20px 0;
	}
</style>


