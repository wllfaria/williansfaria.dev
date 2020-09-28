import styled from 'styled-components'

export const SSearch = styled.div`
	.ais {
		&-SearchBox {
			margin-bottom: ${props => props.theme.margins[2]};
			position: relative;

			input {
				width: 100%;
				padding-top: ${props => props.theme.paddings[1]};
				padding-bottom: ${props => props.theme.paddings[0]};
				padding-left: ${props => props.theme.paddings[1]};
				padding-right: ${props => props.theme.paddings[2]};
				border-radius: ${props => props.theme.borderRadius[1]};
				outline: none;
				border: none;
				font-size: 1.6rem;
				background: ${props => props.theme.colors.background.accent};
				color: ${props => props.theme.colors.text[100]};
			}

			button[type='submit'] {
				position: absolute;
				background: transparent;
				border: none;
				outline: none;
				right: 0;
				height: 100%;
				background: ${props => props.theme.colors.background.accent};
				width: 4rem;
				border-radius: ${props => props.theme.borderRadius[1]};

				svg {
					fill: ${props => props.theme.colors.text[100]};
					width: 100%;
					height: 1.5rem;
				}
			}

			button[type='reset'] {
				display: none;
			}
		}

		&-Hits {
			ul {
				list-style: none;
			}
		}
	}
`

export const SPoweredBy = styled.div`
	margin-top: ${props => props.theme.margins[2]};
	display: flex;
	justify-content: flex-end;

	p {
		color: ${props => props.theme.colors.text[400]};
	}

	svg {
		width: 1.6rem;
		margin-left: ${props => props.theme.margins[1]};
	}
`
