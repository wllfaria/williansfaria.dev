import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@font-face {
		font-family: 'Light';
		src: url('/static/assets/fonts/SpaceGrotesk-Light.woff2') format('woff2'),
			url('/static/assets/fonts/SpaceGrotesk-Light.woff') format('woff'),
			url('/static/assets/fonts/SpaceGrotesk-Light.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Regular';
		src: url('/static/assets/fonts/SpaceGrotesk-Regular.woff2') format('woff2'),
			url('/static/assets/fonts/SpaceGrotesk-Regular.woff') format('woff'),
			url('/static/assets/fonts/SpaceGrotesk-Regular.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Medium';
		src: url('/static/assets/fonts/SpaceGrotesk-Redium.woff2') format('woff2'),
			url('/static/assets/fonts/SpaceGrotesk-Redium.woff') format('woff'),
			url('/static/assets/fonts/SpaceGrotesk-Redium.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Semibold';
		src: url('/static/assets/fonts/SpaceGrotesk-SemiBold.woff2') format('woff2'),
			url('/static/assets/fonts/SpaceGrotesk-SemiBold.woff') format('woff'),
			url('/static/assets/fonts/SpaceGrotesk-SemiBold.ttf') format('truetype');
	}

	@font-face {
		font-family: 'Bold';
		src: url('/static/assets/fonts/SpaceGrotesk-Bold.woff2') format('woff2'),
			url('/static/assets/fonts/SpaceGrotesk-Bold.woff') format('woff'),
			url('/static/assets/fonts/SpaceGrotesk-Bold.ttf') format('truetype');
	}
`
