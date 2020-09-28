import styled, { css } from 'styled-components'

export const Main = styled.main`
	width: 100%;
	padding-bottom: ${props => props.theme.paddings[8]};

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		height: 100vh;
		overflow-y: scroll;
		padding-bottom: ${props => props.theme.paddings[3]};
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

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		line-height: 1.8;
	}
`

export const MutedParagraph = styled.p`
	font-size: ${props => props.theme.fontSizes[5]};
	line-height: 1.655556;
	margin-bottom: ${props => props.theme.margins[2]};
	color: ${props => props.theme.colors.text[300]};
`

export const PurpleText = styled.span`
	color: ${props => props.theme.colors.primary[700]};

	a {
		color: ${props => props.theme.colors.primary[700]} !important;
	}
`

export const SArticleCover = styled.img`
	width: 100%;
	max-height: 150px;
	object-fit: cover;

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		max-height: 200px;
	}

	@media (min-width: ${props => props.theme.breakpoints.md}) {
		max-height: 300px;
	}

	@media (min-width: ${props => props.theme.breakpoints.xl}) {
		max-height: 400px;
	}
`

export const SArticle = styled.div`
	font-family: 'Merriweather';

	& h1,
	& h2,
	& h3 {
		font-family: 'Bold';
	}

	& h1 {
		font-size: ${props => props.theme.fontSizes[4]};
		margin-bottom: ${props => props.theme.margins[2]};

		@media (min-width: ${props => props.theme.breakpoints.lg}) {
			font-size: ${props => props.theme.fontSizes[3]};
		}
	}

	& h2 {
		font-size: ${props => props.theme.fontSizes[5]};
		margin-bottom: 1.5rem;

		@media (min-width: ${props => props.theme.breakpoints.lg}) {
			font-size: ${props => props.theme.fontSizes[4]};
		}
	}

	& h3,
	& h4,
	& h5,
	& h6 {
		font-size: 1.6rem;
		color: ${props => props.theme.colors.text[300]};
		margin-bottom: ${props => props.theme.margins[1]};

		@media (min-width: ${props => props.theme.breakpoints.lg}) {
			font-size: ${props => props.theme.fontSizes[5]};
		}
	}

	& img {
		width: 100%;
		margin-bottom: ${props => props.theme.margins[2]};
	}

	& blockquote {
		padding-left: ${props => props.theme.paddings[1]};
		padding-top: ${props => props.theme.paddings[1]};
		padding-bottom: ${props => props.theme.paddings[1]};
		border-left: 3px solid ${props => props.theme.colors.text[100]};
		font-size: ${props => props.theme.fontSizes[5]};
		color: ${props => props.theme.colors.text[300]};
		margin-bottom: ${props => props.theme.margins[2]};
		font-family: 'Regular';

		@media (min-width: ${props => props.theme.breakpoints.lg}) {
			font-size: ${props => props.theme.fontSizes[4]};
		}

		& p {
			margin-bottom: 0;
		}
	}

	& p {
		font-size: 1.6rem;
		line-height: 1.655556;
		margin-bottom: ${props => props.theme.margins[1]};

		@media (min-width: ${props => props.theme.breakpoints.lg}) {
			font-size: ${props => props.theme.fontSizes[5]};
		}
	}

	& ol,
	& ul {
		ol {
			color: ${props => props.theme.colors.text[300]};
		}
		padding-left: 1.6rem;
		margin-bottom: ${props => props.theme.margins[1]};

		li {
			font-size: 1.6rem;
			margin-bottom: 0.5rem;

			@media (min-width: ${props => props.theme.breakpoints.lg}) {
				font-size: ${props => props.theme.fontSizes[5]};
			}
		}
	}

	& table {
		width: 100%;
		margin-bottom: ${props => props.theme.margins[2]};
		border-collapse: collapse;

		& thead {
			text-align: left;
			font-family: 'Bold';
			font-size: ${props => props.theme.fontSizes[5]};

			@media (min-width: ${props => props.theme.breakpoints.lg}) {
				font-size: ${props => props.theme.fontSizes[4]};
			}
		}

		& tbody {
			font-size: 1.6rem;

			@media (min-width: ${props => props.theme.breakpoints.lg}) {
				font-size: ${props => props.theme.fontSizes[5]};
			}
		}

		& td,
		& th {
			border: 1px solid ${props => props.theme.colors.text[500]};
			padding: 0.5rem;
		}

		& tr:nth-of-type(even) {
			background: ${props => props.theme.colors.background.accent};
		}
	}

	& hr {
		border-top: 2px solid ${props => props.theme.colors.text[500]};
		border-right: none;
		border-left: none;
		border-bottom: none;
	}

	& a {
		text-decoration: none;
		color: ${props => props.theme.colors.primary[500]};
	}
`
