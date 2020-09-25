import styled from 'styled-components'

export interface StyleProps {
	isIphone: boolean
}

export const SBottomBar = styled.footer<StyleProps>`
	height: ${props => (props.isIphone ? '7rem' : '5rem')};
	background: ${props => props.theme.colors.background.accent};
	display: flex;
	align-items: center;
	padding-left: 2.5rem;
	padding-right: 2.5rem;
	padding-bottom: ${props => (props.isIphone ? '2rem' : '0')};
	position: fixed;
	bottom: 0;
	width: 100%;
	justify-content: space-between;

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		display: none;
	}
`
