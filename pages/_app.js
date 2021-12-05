import { Auth } from '@supabase/ui'
import { supabase } from '../utils/initSupabase'

export default function MyApp({ Component, pageProps }) {
  return (
    <main >
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
  )
}
