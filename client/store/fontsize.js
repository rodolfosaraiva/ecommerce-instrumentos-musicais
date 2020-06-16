import Cookies from 'js-cookie'

// state
export const state = () => ({
  fontsize: parseInt(Cookies.get('fontsize'))
})

// getters
export const getters = {
  getFontsize: state => state.fontsize
}

// mutations
export const mutations = {
  SET_FONTSIZE (state, { fontsize }) {
    state.fontsize = fontsize
  }
}

// actions
export const actions = {
  setFontsize ({ commit }, fontsize ) {
    commit('SET_FONTSIZE', { fontsize })
    Cookies.set('fontsize', fontsize, { expires: 365 })
  }
}

