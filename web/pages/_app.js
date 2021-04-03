import { AppProviders } from '../utils/app-providers';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <AppProviders><Component {...pageProps} /></AppProviders>;
}

export default MyApp
