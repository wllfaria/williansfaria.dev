import styled, { DefaultTheme } from 'styled-components'
import { ClipboardCopy } from '@styled-icons/heroicons-outline'
import { motion } from 'framer-motion'

interface IconProps {
	theme?: DefaultTheme
	coppied: boolean
}

export const SCodeWrapper = styled.div`
	position: relative;
	padding-top: ${props => props.theme.paddings[1]};
	border-radius: ${props => props.theme.borderRadius[1]};
	background: ${props => props.theme.colors.background.accent};
	margin-bottom: ${props => props.theme.margins[2]};

	&::before {
		content: '';
		background-image: url('/static/assets/images/code_controls.png');
		background-size: contain;
		background-repeat: no-repeat;
		position: absolute;
		top: 0.5rem;
		left: 1rem;
		width: 5rem;
		height: 1.5rem;
	}

	pre {
		background: ${props => props.theme.colors.background.accent} !important;
		border-radius: 1rem;
	}
`

export const SClipBoardIcon = styled(ClipboardCopy)`
	width: 1.5rem;
	position: absolute;
	cursor: pointer;
	right: 1rem;
	top: 0.5rem;
	transition: color 150ms;
	color: ${(props: IconProps) => (props.coppied ? props.theme.colors.primary[500] : props.theme.colors.text[100])};

	&:hover {
		color: ${props => props.theme.colors.primary[700]};
	}
`

export const SCoppied = styled(motion.p)`
	position: absolute;
	right: 0;
	top: 0.5rem;
	font-family: 'Regular';
	font-size: ${props => props.theme.fontSizes[7]} !important;
	color: ${props => props.theme.colors.primary[500]};
`
