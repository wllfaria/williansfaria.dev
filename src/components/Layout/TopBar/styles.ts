import styled from 'styled-components'
import { motion } from 'framer-motion'

export const STopBar = styled.header`
	height: 5rem;
	display: flex;
	align-items: center;
	padding-left: 2.5rem;
	padding-right: 2.5rem;
	background: ${props => props.theme.colors.background.accent};

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		height: 100vh;
		flex-direction: column;
	}

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		height: 5rem;
		padding-top: 0;
		padding-bottom: 0;
		flex-direction: row;
	}
`

export const STopBarWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	height: 100%;

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		flex-direction: column;
		padding: ${props => props.theme.paddings[3]};
		align-items: center;
	}

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		max-width: 1150px;
		flex-direction: row;
		margin: 0 auto;
		padding-top: 0;
		padding-bottom: 0;
		padding-left: ${props => props.theme.paddings[3]};
		padding-right: ${props => props.theme.paddings[3]};
		justify-content: space-between;
	}
`

export const SProfileImage = styled(motion.img)`
	max-height: 3.5rem;
	max-width: 3.5rem;
	height: 3.5rem;
	cursor: pointer;
	width: 3.5rem;
	object-fit: cover;
	border-radius: 50%;
	margin-right: ${props => props.theme.margins[1]};

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		max-width: 8rem;
		max-height: 8rem;
		width: 8rem;
		height: 8rem;
		margin-right: 0;
		margin-bottom: ${props => props.theme.margins[3]};
	}

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		max-height: 3.5rem;
		max-width: 3.5rem;
		height: 3.5rem;
		width: 3.5rem;
		margin-bottom: 0;
	}
`

export const STopBarTitle = styled(motion.h1)`
	line-height: 1;
	color: ${props => props.theme.colors.text[100]};

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		display: none;
	}
`

export const SBarIconsWrapper = styled.div`
	display: none;

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		display: block;
	}

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		display: block;
	}
`
