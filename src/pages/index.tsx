import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { MutedParagraph, Paragraph, PurpleText, SmallTitle, Title, Main, MainSection, FinishSection } from '../styles'
import { useFetchArticles } from '../hooks/useFetchArticles'
import { TArticle } from '../utils'
import ArticleList from '../components/ArticleList'
import Transition from '../components/Transition'

interface IHomeProps {
	articles: TArticle[]
}

const Home: React.FC<IHomeProps> = ({ articles }) => {
	return (
		<Transition>
			<Head>
				<title>Create Next App</title>
			</Head>
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
					<ArticleList articles={articles} />
				</FinishSection>
			</Main>
		</Transition>
	)
}

export async function getStaticProps(): Promise<{ props: { articles: TArticle[] } }> {
	const articles = useFetchArticles('articles', 1, 3)
	return {
		props: {
			articles
		}
	}
}

export default Home
