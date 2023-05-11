import type { AppProps } from 'next/app'

import MainProvider from 'providers/main-provider'

import { TypeComponentAuthFields } from 'types'

import 'styles/globals.scss'
import 'styles/variables.module.scss'

export default function App({ Component, pageProps }: AppProps & TypeComponentAuthFields) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
