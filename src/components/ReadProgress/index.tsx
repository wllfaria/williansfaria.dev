import React, { useEffect, useState } from 'react'

import { SProgressBarWrapper, SProgressBar } from './styles'

const ReadProgress: React.FC = () => {
	const [scrolled, setScrolled] = useState<number>(0)

	useEffect(() => {
		window.onscroll = () => {
			const winScroll = document.body.scrollTop || document.documentElement.scrollTop
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
			setScrolled((winScroll / height) * 100)
		}
	}, [])

	return (
		<SProgressBarWrapper>
			<SProgressBar style={{ width: scrolled + '%' }} />
		</SProgressBarWrapper>
	)
}

export default ReadProgress
