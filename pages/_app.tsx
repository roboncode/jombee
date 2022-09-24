// import "tailwindcss/tailwind.css";
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { NextPage } from 'next'

// https://nextjs.org/docs/basic-features/layouts
// With TypeScript
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
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page)
  return getLayout(<Component {...pageProps} />)
}
