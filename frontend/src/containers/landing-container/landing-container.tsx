import dynamic from 'next/dynamic'

import clsx from 'clsx'

import Advantages from './components/advantages/advantages'
import FAQ from './components/faq/faq'
import Footer from './components/footer/footer'
import ForWhom from './components/for-whom/for-whom'
import Form from './components/form/form'
import MainBanner from './components/main-banner/main-banner'
import Results from './components/results/results'
import Services from './components/services/services'
import Steps from './components/steps/steps'
import WhatIs from './components/what-is/what-is'

import styles from './landing.module.scss'

const LandingHeader = dynamic(() => import('./components/landing-header/landing-header'), {
	ssr: false,
})

const LandingContainer = () => {
	return (
		<div className={styles.landing}>
			<LandingHeader />
			<div className={clsx(styles.container, styles.padding)}>
				<MainBanner />
				<Services />
				<WhatIs />
				<Advantages />
				<Results />
				<Steps />
				<ForWhom />
				<FAQ />
				<Form />
				<Footer />
			</div>
		</div>
	)
}

export default LandingContainer
