import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppThemeContext } from '../../../states/appThemeState'
import { PurpleText } from '../../../styles'

import {
	SBarLinks,
	SHomeIcon,
	SHomeHeartIcon,
	SArticleLineIcon,
	SArticleFillIcon,
	SBookLineIcon,
	SBookFillIcon,
	SLightBulbOffIcon,
	SLightBulbOnIcon,
	SBarLinkLabel
} from './styles'

const BarLinks: React.FC = () => {
	const { theme, toggleTheme } = useContext(AppThemeContext)
	const router = useRouter()

	return (
		<SBarLinks>
			{router.pathname === '/' ? (
				<>
					<Link href="/">
						<SHomeHeartIcon />
					</Link>
					<SBarLinkLabel>
						<PurpleText>
							<Link href="/">Comece aqui</Link>
						</PurpleText>
					</SBarLinkLabel>
				</>
			) : (
				<>
					<Link href="/">
						<SHomeIcon />
					</Link>
					<SBarLinkLabel>
						<Link href="/">Comece aqui</Link>
					</SBarLinkLabel>
				</>
			)}
			{router.pathname === '/blog' ? (
				<>
					<Link href="/blog">
						<SArticleFillIcon />
					</Link>
					<SBarLinkLabel>
						<PurpleText>
							<Link href="/blog">Artigos</Link>
						</PurpleText>
					</SBarLinkLabel>
				</>
			) : (
				<>
					<Link href="/blog">
						<SArticleLineIcon />
					</Link>
					<SBarLinkLabel>
						<Link href="/blog">Artigos</Link>
					</SBarLinkLabel>
				</>
			)}
			{router.pathname === '/book-notes' ? (
				<>
					<Link href="/book-notes">
						<SBookFillIcon />
					</Link>

					<SBarLinkLabel>
						<PurpleText>
							<Link href="/book-notes">Notas de Livros</Link>
						</PurpleText>
					</SBarLinkLabel>
				</>
			) : (
				<>
					<Link href="/book-notes">
						<SBookLineIcon />
					</Link>
					<SBarLinkLabel>
						<Link href="/book-notes">Notas de Livros</Link>
					</SBarLinkLabel>
				</>
			)}
			{theme.title === 'Light' ? (
				<SLightBulbOnIcon onClick={toggleTheme} />
			) : (
				<SLightBulbOffIcon onClick={toggleTheme} />
			)}
		</SBarLinks>
	)
}

export default BarLinks
