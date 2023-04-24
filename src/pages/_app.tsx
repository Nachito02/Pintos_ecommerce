import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductState from '../../context/AppContext/productState';
import AuthState from '../../context/AuthContext/authState';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
    <ProductState>
  <Component {...pageProps} />
  </ProductState>
  </AuthState>
  )
}
