import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductState from '../../context/AppContext/productState';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductState>
  <Component {...pageProps} />
  </ProductState>
  )
}
