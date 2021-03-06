import styled from 'styled-components'

export const SArticleCard = styled.div`
	list-style: none;
	margin-bottom: ${props => props.theme.margins[2]};
	border-radius: ${props => props.theme.borderRadius[0]};
	cursor: pointer;
`

export const SArticleReadTime = styled.p`
	font-size: ${props => props.theme.fontSizes[6]};
	color: ${props => props.theme.colors.text[300]};
	text-decoration: none;

	@media (min-width: ${props => props.theme.breakpoints.md}) {
		font-size: 1.6rem;
	}
`

export const SArticleTitle = styled.p`
	font-size: ${props => props.theme.fontSizes[5]};
	font-family: 'Bold';
	margin-bottom: ${props => props.theme.margins[1]};
	color: ${props => props.theme.colors.text[100]};
	text-decoration: none;

	@media (min-width: ${props => props.theme.breakpoints.md}) {
		font-size: ${props => props.theme.fontSizes[4]};
	}
`

export const SArticleDesc = styled.p`
	text-decoration: none;
	font-size: 1.6rem;
	color: ${props => props.theme.colors.text[200]};
	margin-bottom: ${props => props.theme.margins[1]};

	@media (min-width: ${props => props.theme.breakpoints.md}) {
		font-size: ${props => props.theme.fontSizes[5]};
	}
`

export const SArticleTag = styled.div`
	display: flex;
	justify-content: space-between;

	font-size: ${props => props.theme.fontSizes[7]};
	color: ${props => props.theme.colors.primary[500]};
	text-decoration: none;
`
