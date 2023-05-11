import { FC } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { staticUrl } from 'consts'

import { IMeta } from './metatags.interface'

const titleImg = `${staticUrl}/next.svg`
const siteName = 'YavnoData'

const Metatags: FC<IMeta> = ({ title, description, image, link, isIndexed = false }) => {
	const { asPath } = useRouter()
	const currentUrl = process.env.FRONT_HOST + asPath
	const fullTitle = `${siteName} - ${title}`

	return (
		<Head>
			<title>{fullTitle}</title>
			{isIndexed ? (
				<>
					<meta name="title" content={fullTitle} key="title" />
					<meta property="og:title" content={fullTitle} key="ogtitle" />
					<meta property="twitter:title" content={fullTitle} key="twtitle" />

					<meta name="description" content={description} key="description" />
					<meta property="og:description" content={description} key="ogdesc" />
					<meta name="twitter:description" content={description} key="twdesc" />

					<meta property="og:image" content={image || titleImg} key="ogimage" />
					<meta property="twitter:image" content={image || titleImg} key="twimage" />
					<meta name="twitter:card" content="summary_large_image" />

					<meta property="og:site_name" content={siteName} />
					<meta property="og:url" content={link || currentUrl} key="ogurl" />
					<meta property="twitter:url" content={link || currentUrl} key="twurl" />
					<link href={link || currentUrl} rel="canonical" />
				</>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
		</Head>
	)
}

export default Metatags
