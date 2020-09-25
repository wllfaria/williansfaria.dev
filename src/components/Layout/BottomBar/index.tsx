import React, { useEffect, useState } from 'react'
import BarLinks from '../BarLinks'

import { SBottomBar } from './styles'

const BottomBar: React.FC = () => {
	const [isIphone, setIsIphone] = useState(false)

	useEffect(() => {
		setIsIphone(navigator.userAgent.includes('iPhone'))
	}, [])

	return (
		<SBottomBar isIphone={isIphone}>
			<BarLinks />
		</SBottomBar>
	)
}

export default BottomBar
