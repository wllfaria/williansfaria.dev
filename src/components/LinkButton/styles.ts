import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SLinkButton = styled(motion.div)`
	display: flex;
	justify-content: center;

	a {
		color: ${props => props.theme.colors.text[100]};
		background: ${props => props.theme.colors.primary[500]};
		text-decoration: none;
		font-size: ${props => props.theme.fontSizes[5]};
		padding-top: ${props => props.theme.paddings[1]};
		padding-right: ${props => props.theme.paddings[2]};
		padding-bottom: ${props => props.theme.paddings[1]};
		padding-left: ${props => props.theme.paddings[2]};
		border-radius: ${props => props.theme.borderRadius[0]};
	}
`
