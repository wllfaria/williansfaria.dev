import React from 'react'
import Link from 'next/link'

import { SLinkButton } from './styles'
import { Variants } from 'framer-motion'

interface ILinkButtonProps {
	label: string
	url: string
	asUrl?: string
}

const linkButtonVariants: Variants = {
	hover: {
		scale: 1.15
	},
	tap: {
		scale: 0.9
	}
}

const LinkButton: React.FC<ILinkButtonProps> = ({ label, url, asUrl }) => {
	return (
		<SLinkButton whileHover="hover" whileTap="tap" variants={linkButtonVariants}>
			<Link href={url} as={asUrl}>
				{label}
			</Link>
		</SLinkButton>
	)
}

export default LinkButton
