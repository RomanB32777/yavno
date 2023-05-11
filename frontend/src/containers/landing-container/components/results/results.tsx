import Image from 'next/image'

import { Col, Row } from 'antd'
import clsx from 'clsx'

import { DawIcon } from 'components/icons'

import {
	landingImagePath,
	results,
	resultsImages,
} from 'containers/landing-container/landing-container.consts'

import { MenuItems } from 'containers/landing-container/landing.types'

import styles from './results.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const Results = () => {
	return (
		<div className={clsx(mainStyles.block, styles.results)} id={MenuItems.clients}>
			<div className={clsx(mainStyles.gradient, styles.gradientPink)} />
			<div className={clsx(mainStyles.gradient, styles.gradientBlue)} />
			<Row justify="space-between">
				<Col md={{ span: 10, order: 0 }} xs={{ span: 24, order: 1 }}>
					<div className={clsx(mainStyles.images, styles.images)}>
						{resultsImages.map(({ name, animated }) => (
							<div
								key={name}
								className={clsx(mainStyles.imageWrapper, styles.imageWrapper, styles[name])}
							>
								<Image
									src={`${landingImagePath}/results/${name}.png`}
									className={clsx(mainStyles.image, {
										[mainStyles.animated]: animated,
									})}
									alt={name}
									fill
								/>
							</div>
						))}
					</div>
				</Col>
				<Col md={{ span: 14, order: 1 }} xs={{ span: 24, order: 0 }}>
					<div className={styles.content}>
						<h3 className={clsx(mainStyles.title, styles.title)}>Как мы добиваемся результата</h3>
						<ul className={mainStyles.list}>
							{results.map((item, index) => (
								<li key={index} className={clsx(mainStyles.listItem, styles.listItem)}>
									<DawIcon />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</Col>
			</Row>
		</div>
	)
}
export default Results
