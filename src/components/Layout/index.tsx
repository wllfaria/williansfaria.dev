import React from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

import { SLayoutGrid } from './styles'

const Layout: React.FC = ({ children }) => {
	return (
		<SLayoutGrid>
			<TopBar />
			{children}
			<BottomBar />
		</SLayoutGrid>
	)
}

export default Layout
