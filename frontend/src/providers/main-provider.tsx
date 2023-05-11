import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import Layout from 'components/layout/layout'

import { TypeComponentAuthFields } from 'types'

import vars from 'styles/variables.module.scss'

const queryClient = new QueryClient()

const MainProvider: FC<TypeComponentAuthFields> = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />
			</Head>
			<NextNProgress
				color={vars.primaryColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				options={{ showSpinner: false }}
			/>
			<QueryClientProvider client={queryClient}>
				<Layout>{children}</Layout>
			</QueryClientProvider>
		</>
	)
}

export default MainProvider
