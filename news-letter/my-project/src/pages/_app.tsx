import '../styles/globals.css'
import '../styles/fonts.css'
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'



export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}


export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
