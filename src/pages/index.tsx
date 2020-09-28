import React from 'react'
import { GetStaticProps } from 'next'
import { motion } from 'framer-motion'

import { TArticle, TStaticPropsContext, TStaticPropsResult } from '../utils'
import { useFetchContent } from '../hooks'

import { MutedParagraph, Paragraph, PurpleText, SmallTitle, Title, Main, MainSection, FinishSection } from '../styles'
import ArticleList from '../components/ArticleList'
import Transition from '../components/Transition'
import Meta from '../components/Meta'

interface IHomeProps {
	content: TArticle[]
}

const Home: React.FC<IHomeProps> = ({ content }) => {
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
					<ArticleList content={content} quantity={3} />
				</FinishSection>
			</Main>
		</Transition>
	)
}

export const getStaticProps: GetStaticProps<TStaticPropsResult, TStaticPropsContext> = async () => {
	const articles = useFetchContent()
	return {
		props: {
			content: articles
		}
	}
}

export default Home
