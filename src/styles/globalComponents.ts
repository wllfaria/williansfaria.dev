import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
	width: 100%;

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		height: 100vh;
		overflow-y: scroll;
	}

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		height: 100vh;
		overflow-y: scroll;
	}

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		height: auto;
		overflow-y: unset;
	}
`

const sectionWidth = css`
	max-width: 60.18rem;
	margin: 0 auto;
	padding-left: 2.5rem;
	padding-right: 2.5rem;
`

export const MainSection = styled.section`
	padding-top: ${props => props.theme.paddings[3]};
	${sectionWidth};
`

export const FinishSection = styled.section`
	padding-top: ${props => props.theme.paddings[1]};
	padding-bottom: ${props => props.theme.paddings[8]};
	${sectionWidth};
`

export const Title = styled.h2`
	font-size: ${props => props.theme.fontSizes[2]};
	margin-bottom: ${props => props.theme.margins[2]};
	font-family: 'Bold';
	display: flex;
`

export const SmallTitle = styled.h2`
	font-size: ${props => props.theme.fontSizes[3]};
	margin-bottom: ${props => props.theme.margins[2]};
	font-family: 'Bold';
`

export const Paragraph = styled.p`
	font-size: ${props => props.theme.fontSizes[5]};
	line-height: 1.655556;
	margin-bottom: ${props => props.theme.margins[2]};
`

export const MutedParagraph = styled.p`
	font-size: ${props => props.theme.fontSizes[5]};
	line-height: 1.655556;
	margin-bottom: ${props => props.theme.margins[2]};
	color: ${props => props.theme.colors.text[300]};
`

export const PurpleText = styled.span`
	color: ${props => props.theme.colors.primary[500]};
`
