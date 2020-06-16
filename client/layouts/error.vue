<template>
	<div class="page-error">
	  <div class="container">
			<div class="uk-grid uk-flex-middle">
				<div class="uk-width-auto col-1">
					<div class="f1 ls2 t1 bold black-80 mb70">Oops!</div>
					<p class="t2 f-h3 black-80">
						Parece que o que você procura não existe! <br/> Verifique se o link <br/>da página está correto.
					</p>
					 <nuxt-link to="/" class="btn btn-medium btn-purple m-230 mt70">Acessar página inicial</nuxt-link> 
				</div>
				<div class="uk-width-expand col-2">
					<img src="~/static/404/pagina-nao-encontrada.svg" alt="Página não encontrada." width="543" height="413" class="img-fluid pull-right">
				</div>
			</div>
	  </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
	.page-error {
		padding: 140px 0;
		background: #FFF;
	}

</style>