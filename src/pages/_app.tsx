import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import reactGA from 'react-ga'

import AppThemeState from '../states/appThemeState'

import Layout from '../components/Layout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	useEffect(() => {
		reactGA.initialize(process.env.GOOGLE_ANALYTICS_ID)
		reactGA.pageview(window.location.pathname + window.location.search)
	}, [])

	return (
		<AppThemeState>
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</AppThemeState>
	)
}

export default MyApp
