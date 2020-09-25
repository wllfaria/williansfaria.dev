import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { MutedParagraph, Paragraph, PurpleText, SmallTitle, Title, Main, MainSection, FinishSection } from '../styles'
import { useFetchArticles } from '../hooks/useFetchArticles'
import { TArticle } from '../utils'
import ArticleList from '../components/ArticleList'
import Transition from '../components/Transition'
import { useFetchBookNotes } from '../hooks/useFetchBookNotes'
import { ContentContext } from '../states/contentState'
import Meta from '../components/Meta'

interface IHomeProps {
	articles: TArticle[]
	bookNotes: TArticle[]
}

const Home: React.FC<IHomeProps> = ({ articles: fetchedArticles, bookNotes: fetchedBookNotes }) => {
	const { articles, bookNotes, setArticles, setBookNotes } = useContext(ContentContext)

	useEffect(() => {
		!articles && setArticles(fetchedArticles)
		!bookNotes && setBookNotes(fetchedBookNotes)
	}, [])

	return (
		<Transition>
			<Meta
				tags="Desenvolvedor, Web, Produtividade, Blog"
				imageAlt="Foto minha encostado em um arbusto de flores usando uma jaqueta jeans"
				url="/"
				title="Willians Faria"
				image="profile_picture.jpg"
				description="Meu nome é Willians Faria, eu sou Desenvolvedor Web, Cientista da computação, Blogger, e mais algumas coisas que estão por vir!"
			/>
			<Main>
				<MainSection>
					<Title>
						Oi gente!{' '}
						<motion.div whileHover={{ rotate: [0, 70, 0] }} animate={{ rotate: [0, 100, 20, 120, 0] }}>
							{' '}
							👋
						</motion.div>
					</Title>
					<MutedParagraph>
						Meu nome é Willians Faria, eu sou Desenvolvedor Web, Cientista da computação, Blogger, e mais
						algumas coisas que estão por vir!
					</MutedParagraph>
					<Paragraph>
						Eu gosto de estudar, escrever e compartilhar ideias, pensamentos e aprendizados sobre
						tecnologia, técnicas de estudo, livros, produtividade e uma série de outras coisas.
					</Paragraph>
					<Paragraph>
						Por fim, se você ta afim de aprender algo novo, dividir experiências, descobrir tecnologias ou
						só passar o tempo, recomendo ler algum dos <PurpleText>artigos do blog!</PurpleText>
					</Paragraph>
				</MainSection>
				<FinishSection>
					<SmallTitle>Últimos artigos 📝</SmallTitle>
					<ArticleList quantity={3} />
				</FinishSection>
			</Main>
		</Transition>
	)
}

export async function getStaticProps(): Promise<{ props: { articles: TArticle[]; bookNotes: TArticle[] } }> {
	const articles = useFetchArticles()
	const bookNotes = useFetchBookNotes()
	return {
		props: {
			articles,
			bookNotes
		}
	}
}

export default Home
