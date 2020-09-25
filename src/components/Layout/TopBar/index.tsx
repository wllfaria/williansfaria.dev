import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useAnimation, Variants } from 'framer-motion'
import BarLinks from '../BarLinks'

import { STopBar, STopBarWrapper, SProfileImage, STopBarTitle, SBarIconsWrapper } from './styles'
import { useRouter } from 'next/router'

const imageVariants: Variants = {
	hover: {
		scale: 4,
		borderRadius: '20%',
		y: 50,
		transition: { type: 'spring', stiffness: 300 }
	}
}

const titleVariants: Variants = {
	initial: {
		y: 50,
		opacity: 0
	},
	switch: {
		y: [0, 20, 30, -30, 0],
		opacity: [1, 0.2, 0, 0, 1],
		transition: { duration: 0.15, ease: [0.6, -0.05, 0.01, 0.99] }
	}
}

const TopBar: React.FC = () => {
	const [pageTitle, setPageTitle] = useState('')
	const controls = useAnimation()
	const router = useRouter()
	const constraintsRef = useRef(null)

	const formatPathName = useCallback((url: string) => {
		if (url === '/') {
			controls.start('switch')
			setPageTitle('Comece aqui')
		} else if (url.includes('/blog')) {
			controls.start('switch')
			setPageTitle('Meu blog')
		} else if (url.includes('book-notes')) {
			controls.start('switch')
			setPageTitle('Notas de livros')
		}
	}, [])

	useEffect(() => {
		formatPathName(router.pathname)
		router.events.on('routeChangeComplete', url => formatPathName(url))
	}, [])

	return (
		<STopBar>
			<STopBarWrapper ref={constraintsRef}>
				<SProfileImage
					drag
					dragConstraints={constraintsRef}
					dragElastic={0.5}
					whileHover="hover"
					variants={imageVariants}
					src="/static/assets/images/profile_picture.jpg"
				/>
				<STopBarTitle initial="initial" animate={controls} variants={titleVariants}>
					{pageTitle}
				</STopBarTitle>
				<SBarIconsWrapper>
					<BarLinks />
				</SBarIconsWrapper>
			</STopBarWrapper>
		</STopBar>
	)
}

export default TopBar
