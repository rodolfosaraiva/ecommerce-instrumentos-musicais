<template>
  <div>
    <div class="content-white clearfix">
      <div class="container">
        <ol vocab="https://schema.org/" typeof="BreadcrumbList" class="breadcrumbs f12 clearfix mt25 mb25">
          <li property="itemListElement" typeof="ListItem">
            <nuxt-link property="item" typeof="WebPage" :to="{ name: 'home'}">
              <span property="name">Página inicial</span></nuxt-link>
              <meta property="position" content="0">
          </li>
          <li class="black-30 separator"></li>
          <li class="last">Violão Michael VM19E Nylon Acústico - Natural Fosco</li>
        </ol> 

        <div class="mb60">
          <div class="product-infos uk-grid" >
            <div class="holder-photo uk-width-1-1 uk-width-auto@m">
              <img :src="require('~/static/produto/violao.jpg')" alt="Violão Michael VM19E Nylon Acústico - Natural Fosco" class="img-fluid block w-100">
            </div>
            <div class="uk-width-1-1 uk-width-expand@m">
              <stars class="stars mb20"></stars>
              <h2 class="product-name purple black">
                Violão Michael VM19E Nylon Acústico - Natural Fosco
              </h2>
              <div class="prices black mt35">
                <span class="f16">
                  <span class="mr5 line-t">R$ 449,90</span> 
                  <span class="green">POR R$ 279,90</span>
                </span>
                <div class="parcels mt10 f15">
                  ou 10x de R$ 27,90 sem juros
                </div>
              </div>
              <a href="#" class="btn btn-purple btn-block btn-large mt25" @click="$modal.show('modal-fast-buy')">COMPRAR</a>
              <div class="clearfix mt50 block">
                <a href="#informacoes" class="link-purple">Clique aqui para ver informações.</a>
              </div>
            </div>
          </div>            
        </div>
      </div>
    </div>

    <labels></labels>       

    <div class="content-white clearfix" id="informacoes">
      <div class="container">
        <div class="mt60 mb60">
          <div class="uk-grid">
            <div class="uk-width-1-1 uk-width-1-2@s">
              <h3 class="black purple mb30">MAIS SOBRE O PRODUTO</h3>
              <p class="mt15">
                O violão Antares Michael VM19E Natural Fosco (NS) é um belíssimo instrumento musical com acabamento de ótimo padrão e sonoridade encantadora que irá garantir versatilidade aos músicos.
              </p>
              <p>
                Marca: Michael<br/>
                Código do Produto: 403565<br/>
                Garantia: 3 meses para defeitos de fabricação              
              </p>
            </div>
            <div class="uk-width-1-1  uk-width-1-2@s">
              <h3 class="black purple mb30">ESPECIFICAÇÃO TÉCNICA</h3>
              <ul>
                <li class="mt5">- Modelo: Violão Adulto</li>
                <li class="mt5">- Tampo: Spruce</li>
                <li class="mt5">- Braço em Basswood</li>
                <li class="mt5">- Escala e Cavalete em Dark Maple</li>
                <li class="mt5">- Filete ABS no corpo e na escala</li>
                <li class="mt5">- Marcadores de escala Dot na Lateral</li>
                <li class="mt5">- Tensor Dual Action</li>
                <li class="mt5">- Tarraxas: Cromadas c/ borboletas madrepérola</li>
                <li class="mt5">- Encordoamento: Nylon (tensão normal)</li>
                <li class="mt5">- Tamanho: 4/4(39) / 99cm</li>
                <li class="mt5">- Acompanha Capa exclusiva Michael</li>
                <li class="mt5">- Cor: Satin</li>
              </ul>
              <div class="mt10">*Produto sujeito a alteração sem aviso prévio</div>
            </div>
          </div>
        </div>
        
        <div class="clearfix">
          <div class="avaliacoes mt30">
            <div class="text-center">
              <h3 class="black purple f-h2 mb15">AVALIAÇÕES</h3>
              <stars></stars>
              <a href="" class="btn btn-purple mt25">ESCREVER UMA AVALIAÇÃO</a>
            </div>

            <div class="mt50 mb60">
              <div class="uk-grid">
                <div class="uk-width-1-1 uk-width-1-3@m" v-for="i in 3">
                  <div class="box-review">
                    <stars class="mb15 f13"></stars>
                    <p>Produto muito bom, igual na descrição, é muito bonito e cumpre o que promete!</p>
                    <hr>
                    <p>há 2 dias <span class="block black">por Rodolfo Sanches</span></p>
                  </div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>  

    

    <modal name="modal-fast-buy"
           :classes="['v--modal', 'modal']"
           :pivot-y="0.2"
           :width="650"
           :height="380">
      <div class="modal-content text-center">
        <div class="holder-icon green mb15">
          <i class="far fa-check-circle"></i>
        </div>
        <div class="f-h1 green mb10">Produto adicionado ao carrinho!</div>
        <p class="f15 black-60 mb35">O que você deseja fazer?</p>
        <div class="uk-grid uk-grid-small">
          <div class="uk-width-1-1 uk-width-1-2@s">
            <a href="javascript:" class="btn btn-medium btn-block btn-secundary" @click="$modal.hide('modal-fast-buy')">Continuar comprando</a>
          </div>          
          <div class="uk-width-1-1 uk-width-1-2@s">
            <nuxt-link :to="{ name: 'carrinho' }" class="btn btn-medium btn-purple btn-block">Ir para o carrinho</nuxt-link>
          </div>
        </div>
        <a href="javascript:" class="close-modal" @click="$modal.hide('modal-fast-buy')">&times;</a>
      </div>
    </modal>      
  </div>
</template>

<script>
import Stars from '~/components/Stars'
import Labels from '~/components/Labels'
import fontsize from '~/mixins/fontsize.js'

export default {
  components: {Stars, Labels},
  
  mixins: [fontsize],
  head () {
    return { 
      title: 'Violão Michael VM19E Nylon Acústico - Natural Fosco - ' + process.env.appName,
      bodyAttrs: {
        class: "fontsize_" + this.$store.state.fontsize.fontsize
      }
    }
  },

  data: () => ({
    title: process.env.appName,
   
  }),

  mounted() {
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import 'client/assets/sass/_variables.scss';
  @import 'client/assets/sass/_mixins.scss';

  .box-review {
    padding: 40px 50px;
    border: 1px solid #EEEEEE;
    @include box-shadow(1px 2px 25px 0px rgba(204,204,204,1))
  }

</style>
