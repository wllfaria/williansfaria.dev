import React from 'react'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import AppThemeState from '../states/appThemeState'
import Layout from '../components/Layout'
import 'prismjs/themes/prism-tomorrow.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
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
