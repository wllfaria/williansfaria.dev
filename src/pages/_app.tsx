import React from 'react'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import AppThemeState from '../states/appThemeState'
import Layout from '../components/Layout'
import ContentState from '../states/contentState'

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
	return (
		<AppThemeState>
			<ContentState>
				<Layout>
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</Layout>
			</ContentState>
		</AppThemeState>
	)
}

export default MyApp
