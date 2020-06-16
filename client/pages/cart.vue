<template>
  <div v-lazy-container="{ selector: 'img[lazy]' }">
  	<div class="content-white clearfix">
  		
  		<div class="container">
  			<div class="mt50 mb60">
		  		<div class="uk-grid uk-flex-middle">
		  			<div class="uk-width-expand">
		  				<h2 class="purple black">CARRINHO DE COMPRAS</h2>
		  			</div>
		  			<div class="uk-width-auto">
		  				<nuxt-link :to="{ name: 'checkoutConcluido' }" class="btn btn-large btn-purple">finalizar compra</nuxt-link>
		  			</div>
		  		</div>
	  		</div>

	  		<table class="table table-cart">
	  			<thead>
	  				<tr>
	  					<th class="f14">PRODUTO</th>
	  					<th class="f14"></th>
	  					<th class="f14">PREÇO</th>
	  					<th class="f14">QUANTIDADE</th>
	  					<th class="f14">TOTAL</th>
	  				</tr>
	  			</thead>

	  			<tbody>
	  				<tr v-for="produto in produtos">
	  					<td width="70" class="td-photo">
	  						<img :src="require('~/static/carrinho/violao.png')" alt="Violão Michael VM19E Nylon Acústico - Natural Fosco" class="img-fluid block" width="70">
	  					</td>
	  					<td class="td-produto">
	  						<div class="purple bold">{{ produto.nome }}</div>
	  						<div class="f12 mt10">Disponibilidade: Imediata</div>
	  					</td>
	  					<td class="medium td-precos">
	  						<span class="line-t black-50 block">R$ {{ formatPrice(produto.precoOriginal) }}</span>
	  						<span class="block mt5">R$ {{ formatPrice(produto.preco) }}</span>
	  					</td>
	  					<td class="td-quantidade">
	  						<input type="number" value="10" class="input-quantity" v-model="produto.quantidade" v-mask="'###'">
	  					</td>
	  					<td class="f16 medium td-total">
	  						R$ {{ formatPrice(getTotal(produto)) }}
	  					</td>
	  				</tr>
	  			</tbody>
	  		</table>
			
			<div class="box-prices mt60 mb60">
		  		<div class=" uk-grid">
		  			<div class="uk-width-expand">
		  				<div class="mt20 ml20">
			  				<div class="f14 medium mb10">CUPOM DE DESCONTO</div>
			  				<div class="uk-grid uk-grid-small">
			  					<div class="uk-width-auto">
			  						<input type="text" class="input-small">
			  					</div>
			  					<div class="uk-width-auto">
			  						<a href="javascript:" class="btn btn-small btn-secundary">adicionar</a>
			  					</div>
			  				</div>
		  				</div>
		  			</div>
		  			<div class="uk-width-auto">
		  				<table class="table-prices">
		  					<tr>
		  						<td class="t1">Subtotal</td>
		  						<td class="t2">R$ {{ formatPrice(getCartTotal()) }}</td>
		  					</tr>	  					
		  					<tr>
		  						<td class="t1">Descontos</td>
		  						<td class="t2">R$ 0,00</td>
		  					</tr>
		  					<tr>
		  						<td class="t1">Frete</td>
		  						<td class="t2">
		  							<a href="javascript:" class="f14  medium link-purple">calcular</a>
		  						</td>
		  					</tr>	  					
		  					<tr>
		  						<td class="t1 purple">Total</td>
		  						<td class="t2 bold purple">
		  							R$ {{ formatPrice(getCartTotal()) }}
		  						</td>
		  					</tr>
		  				</table>
		  			</div>
		  		</div>
	  		</div>
  		
			<div class="mb60">
		  		<div class="uk-grid uk-flex-middle">
		  			<div class="uk-width-expand">
		  			</div>
		  			<div class="uk-width-auto">
		  				<nuxt-link :to="{ name: 'checkoutConcluido' }" class="btn btn-large btn-purple">finalizar compra</nuxt-link>
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
		appName: process.env.appName,
		produtos: [{
			nome: 'Violão Michael VM19E Nylon Acústico - Natural Fosco',
			quantidade: 2,
			preco: 50,
			precoOriginal: 200,
		},{
			nome: 'Violão João Preto Fosco',
			quantidade: 3,
			preco: 200,
			precoOriginal: 300,
		},{
			nome: 'Violão Giovani Azul Brilhante',
			quantidade: 1,
			preco: 500,
			precoOriginal: 1500,
		}]
	}),

	methods: {
	    formatPrice: function(value) {
	      let val = (value/1).toFixed(2).replace('.', ',')
	      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
	    },		
	    getTotal (produto) {
	      return produto.preco * produto.quantidade
	    },	    
	    getCartTotal () {
	    	var total = 0,
	    		t = this
	      this.produtos.forEach(function(produto) {
	      	total += t.getTotal(produto)
	      })

	      return total
	    },
	}

}
</script>


<style lang="scss" scoped>
	@import 'client/assets/sass/_variables.scss';
	@import 'client/assets/sass/_mixins.scss';

	.table-cart {
		width: 100%;
		text-align: left;
		td, th {
		    position: relative;
		    padding: 15px;
		    vertical-align: middle;
	    }
	    th {
	    	border-bottom: 1px solid #CCC;
	    	color: #4d4d4d;
	    	@include medium();
	    }

	    tr:nth-child(2n) {
	    	background-color: #eee;
	    }
	}

	.input-quantity {
		width: 100px;
	}

	.box-prices {
		padding: 30px;
		border: 1px solid $black-30;
		@include border-radius(5px);
	}
	.table-prices {
		td {
			padding: 10px 30px;
		}
		.t1, .t2 {
			font-size: 20px;
		}
		.t1 {
			text-align: right;
		}
	}

	@media (max-width: 800px) {
		.table-cart {
			width: 100%;
			display: block;
			thead {
				display: none;
			}
			tbody {
				display: block;
				width: 100%;
				tr {
					width: 100%;
					margin-bottom: 20px;
					@include clearfix();
				}
				tr, td {
					display: block;
				}
				td {
					float: left;
				}

				.td-photo {
					width: 100px;
					min-height: 200px;
				}
				.td-precos {
					display: none;
				}
				.td-produto, .td-total, .td-quantidade {
					width: 100%;
					padding-left: 100px !important;
					margin-left: -100px;
				}
				.td-quantidade {
					&:before {
						display: inline-block;
						content: 'Quantidade:';
						margin-bottom: 5px;
					}
				}
				.td-total {
					&:before {
						display: inline-block;
						content: 'Valor total: '
					}
				}
			}
		}
	}

</style>