// import "tailwindcss/tailwind.css";
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { NextPage } from 'next'

interface LayoutComponent {
  getLayout: (page: React.ReactElement) => React.ReactNode
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: React.ComponentType & LayoutComponent
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const comp = Component as any
  const getLayout = comp.getLayout ?? ((page: React.ReactNode) => page)
  return getLayout(<Component {...pageProps} />)
}
