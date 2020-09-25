import styled from 'styled-components'

export const SLayoutGrid = styled.div`
	display: grid;

	@media (min-width: ${props => props.theme.breakpoints.sm}) {
		grid-template-columns: 100px 1fr;
	}

	@media (min-width: ${props => props.theme.breakpoints.lg}) {
		grid-template-columns: 1fr;
	}
`
