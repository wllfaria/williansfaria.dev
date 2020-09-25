import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 10px;
	}

	body {
		background: ${props => props.theme.colors.background[100]};
		font-size: ${props => props.theme.fontSizes[8]};
		color: ${props => props.theme.colors.text[100]};
	}

	html,
	body {
		height: 100vh;
	}

	body,
	textarea,
	input {
		font-family: 'Regular';
		line-height: 1.7555555555555556;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		-moz-font-smoothing: antialiased;
		text-rendering: optimizelegibility;
	}
`
