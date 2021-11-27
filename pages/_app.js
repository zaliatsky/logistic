import { Provider } from 'react-redux'
import store from '../front-end/redux/stores/store'
import '../front-end/styles/global.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
