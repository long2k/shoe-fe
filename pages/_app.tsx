import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Header from '../common/components/partial/Header'
import Footer from '../common/components/partial/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
  )
  
}
