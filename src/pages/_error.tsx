import React from 'react'
import styled from 'styled-components'

import Transition from '../components/Transition'
import LinkButton from '../components/LinkButton'
import { MainSection } from '../styles'

const Error: React.FC = () => {
	return (
		<Transition>
			<SScreenCenter>
				<MainSection>
					<SErrorText>
						Opa, parece que isso aqui não existe, mas relaxa, se você só quiser explorar:
					</SErrorText>
					<LinkButton url="/" label="Comece aqui" />
					<SErrorText>Ou senão você também pode</SErrorText>
					<LinkButton url="/blog" label="Ler meu Blog" />
				</MainSection>
			</SScreenCenter>
		</Transition>
	)
}

export default Error

const SScreenCenter = styled.div`
	width: 100%;
	height: calc(100vh - 5rem);
	flex-direction: column;
	padding-left: ${props => props.theme.paddings[3]};
	padding-right: ${props => props.theme.paddings[3]};
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`

const SErrorText = styled.p`
	font-size: ${props => props.theme.fontSizes[5]};
	margin-top: ${props => props.theme.margins[2]};
	margin-bottom: ${props => props.theme.margins[2]};
`
