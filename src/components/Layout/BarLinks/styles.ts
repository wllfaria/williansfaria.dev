import styled, { css } from 'styled-components'
import { Home } from '@styled-icons/boxicons-regular'
import { HomeHeart } from '@styled-icons/boxicons-solid'
import { LightBulb as LightBulbOff } from '@styled-icons/heroicons-outline'
import { LightBulb as LightBulbOn } from '@styled-icons/heroicons-solid'
import { Book as BookFill } from '@styled-icons/remix-fill'
import { Book as BookLine } from '@styled-icons/remix-line'
import { Article as ArticleLine } from '@styled-icons/material-outlined'
import { Article as ArticleFill } from '@styled-icons/material'

export const SBarLinks = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	a {
		text-decoration: none;
		color: ${props => props.theme.colors.text[100]};
	}

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		flex-direction: column;
	}

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		flex-direction: row;
	}
`

export const SBarLinkLabel = styled.span`
	display: none;

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		display: block;
		font-size: ${props => props.theme.fontSizes[5]};
		cursor: pointer;

		&:not(:last-of-type) {
			margin-right: 2rem;
		}
	}
`

const lineIconStyles = css`
	cursor: pointer;
	width: 3rem;
	transition: color 150ms;

	&:hover {
		color: ${props => props.theme.colors.primary[700]};
	}

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		width: 4rem;
		margin-bottom: ${props => props.theme.margins[3]};
	}

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		display: none;
	}
`

const fillIconStyles = css`
	${lineIconStyles};
	color: ${props => props.theme.colors.primary[500]};
`

export const SHomeIcon = styled(Home)`
	${lineIconStyles};
`

export const SHomeHeartIcon = styled(HomeHeart)`
	${fillIconStyles};
`

export const SLightBulbOffIcon = styled(LightBulbOff)`
	${lineIconStyles};

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		display: block;
		margin-bottom: 0;
		width: 3rem;
		margin-left: ${props => props.theme.margins[1]};
	}
`

export const SLightBulbOnIcon = styled(LightBulbOn)`
	${fillIconStyles};

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		display: block;
		margin-bottom: 0;
		width: 3rem;
		margin-left: ${props => props.theme.margins[1]};
	}
`

export const SBookLineIcon = styled(BookLine)`
	${lineIconStyles};
`

export const SBookFillIcon = styled(BookFill)`
	${fillIconStyles};
`

export const SArticleLineIcon = styled(ArticleLine)`
	${lineIconStyles};
`

export const SArticleFillIcon = styled(ArticleFill)`
	${fillIconStyles};
`
