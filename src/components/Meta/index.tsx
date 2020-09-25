import React from 'react'
import Head from 'next/head'

interface IMetaProps {
	title: string
	description: string
	imageAlt: string
	image: string
	url: string
	tags: string
}

const Meta: React.FC<IMetaProps> = ({ title, description, image, imageAlt, url, tags }) => (
	<Head>
		<title>{title}</title>

		{/* General Tags */}
		<meta name="description" content={description} />
		<link rel="canonical" href={`https://williansfaria.dev${url}`} />
		<meta charSet="utf-8" />
		<meta name="robots" content="index,follow" />
		<meta name="googlebot" content="index,follow" />
		<meta name="owner" content="Willians Faria" />
		<meta name="url" content="https://williansfaria.dev" />
		<meta name="identifier-URL" content="https://williansfaria.dev" />
		<meta name="revisit-after" content="7 days" />
		<meta name="keywords" content={tags} />
		<meta name="author" content="Willians Faria, dev.willians.faria@gmail.com" />
		<meta name="reply-to" content="dev.willians.faria@gmail.com" />
		<meta name="rating" content="General" />
		<meta name="referrer" content="no-referrer" />

		{/* Open Graph Tags */}
		<meta property="og:type" content="website" />
		<meta property="og:image" content={`https://williansfaria.dev/static/assets/images/${image}`} />
		<meta name="og:title" property="og:title" content={title} />
		<meta name="og:description" property="og:description" content={description} />
		<meta property="og:site_name" content="Willians Faria" />
		<meta property="og:url" content={`https://williansfaria.dev${url}`} />

		{/* Twitter Tags */}
		<meta name="twitter:image" content={`https://williansfaria.dev/static/assets/images/${image}`} />
		<meta name="twitter:image:alt" content={imageAlt} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:site" content="@wllfaria_" />
		<meta name="twitter:creator" content="@wllfaria_" />

		{/* Favicons */}
		<link rel="icon" href="/static/assets/images/favicon-32.png" sizes="32x32" />
		<link rel="icon" href="/static/assets/images/favicon-57.png" sizes="57x57" />
		<link rel="icon" href="/static/assets/images/favicon-76.png" sizes="76x76" />
		<link rel="icon" href="/static/assets/images/favicon-96.png" sizes="96x96" />
		<link rel="icon" href="/static/assets/images/favicon-128.png" sizes="128x128" />
		<link rel="icon" href="/static/assets/images/favicon-192.png" sizes="192x192" />
		<link rel="icon" href="/static/assets/images/favicon-228.png" sizes="228x228" />
		<link rel="shortcut icon" sizes="196x196" href="/static/assets/images/favicon-196.png" />
		<link rel="apple-touch-icon" href="/static/assets/images/favicon-120.png" sizes="120x120" />
		<link rel="apple-touch-icon" href="/static/assets/images/favicon-152.png" sizes="152x152" />
		<link rel="apple-touch-icon" href="/static/assets/images/favicon-180.png" sizes="180x180" />
		<meta name="msapplication-TileColor" content="#9038FD" />
		<meta name="msapplication-TileImage" content="/static/assets/images/favicon-144.png" />
		<meta name="msapplication-config" content="/static/assets/images/browserconfig.xml" />

		{/* Apple Tags */}
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta content="yes" name="apple-touch-fullscreen" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
		<meta name="format-detection" content="telephone=no" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		{/* IE Tags */}
		<meta httpEquiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
		<meta httpEquiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
		<meta name="mssmarttagspreventparsing" content="true" />
		<meta httpEquiv="X-UA-Compatible" content="chrome=1" />
		<meta name="application-name" content="Willians Faria" />
	</Head>
)

export default Meta
