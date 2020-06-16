import Cookies from 'js-cookie'

export default {
  computed: {
    'fontsize': {
      get() {
        this.$forceUpdate();
        return (this.$store.getters['fontsize/getFontsize']) ? this.$store.getters['fontsize/getFontsize'] : parseInt(Cookies.get('fontsize'));
      }
    },

    maxDisabled: {
      get() {
        return this.fontsize >= 2;
      }
    },

    minDisabled: {
      get() {
        return this.fontsize <= 0
      }
    }
  },

	methods: {
    aumentarFonte() {
      if (!this.maxDisabled) {
        this.$store.dispatch('fontsize/setFontsize', this.fontsize+1)    
      } 

    },

    diminuirFonte() {
      if (!this.minDisabled) {
        this.$store.dispatch('fontsize/setFontsize', this.fontsize-1)    
      }
    }
	}
}