import axios from 'axios'
import swal from 'sweetalert2'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default ({ app, store, redirect }) => {
  axios.defaults.baseURL = process.env.apiUrl

  if (process.server) {
    return
  }
  
  // Request interceptor
  axios.interceptors.request.use(request => {
    request.baseURL = process.env.apiUrl

    // let token = document.head.querySelector('meta[name="csrf-token"]')

    // if (token) {
    //   axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
    // } else {
    //   console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
    // }

    const locale = store.getters['lang/locale']
    if (locale) {
      request.headers.common['Accept-Language'] = locale
    }

    return request
  })

  // Response interceptor
  axios.interceptors.response.use(response => response, error => {
    const { status } = error.response || {}

    if (status == 404) {
      redirect({ name: 'home' })
    }

    return Promise.reject(error)
  })
}
