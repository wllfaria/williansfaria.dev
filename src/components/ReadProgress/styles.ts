import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SProgressBarWrapper = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	height: 0.5rem;
	display: flex;
	justify-content: flex-start;
`

export const SProgressBar = styled(motion.div)`
	transform-origin: 50% 100%;
	height: 100%;
	width: 0%;
	background: ${props => props.theme.colors.primary[500]};
`
