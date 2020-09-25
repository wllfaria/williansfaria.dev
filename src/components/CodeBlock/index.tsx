import { useAnimation, Variants } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { AppThemeContext } from '../../states/appThemeState'

import { SCodeWrapper, SClipBoardIcon, SCoppied } from './styles'

interface ICodeBlockProps {
	language: string
	value: string
}

const CoppiedTextVariants: Variants = {
	initial: {
		x: 20,
		opacity: 0
	},
	slideIn: {
		opacity: 1,
		x: -35,
		transition: { duration: 0.15, type: 'spring', stiffness: 500 }
	}
}

const CodeBlock: React.FC<ICodeBlockProps> = ({ language, value }) => {
	const { theme } = useContext(AppThemeContext)
	const [coppied, setCoppied] = useState(false)
	const controls = useAnimation()

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(value)
		setCoppied(true)
		controls.start('slideIn')
	}

	return (
		<SCodeWrapper>
			<SClipBoardIcon coppied={coppied} onClick={copyToClipboard} />
			{coppied && (
				<SCoppied initial="initial" animate={controls} variants={CoppiedTextVariants}>
					copiado
				</SCoppied>
			)}
			<SyntaxHighlighter language={language} style={theme.title === 'Light' ? prism : tomorrow}>
				{value}
			</SyntaxHighlighter>
		</SCodeWrapper>
	)
}

export default CodeBlock
