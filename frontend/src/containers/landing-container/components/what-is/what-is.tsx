import Image from 'next/image'

import { Col, Row } from 'antd'
import clsx from 'clsx'

import {
	landingImagePath,
	whatIsImages,
} from 'containers/landing-container/landing-container.consts'

import { MenuItems } from 'containers/landing-container/landing.types'

import styles from './what-is.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const WhatIs = () => {
	return (
		<div className={clsx(mainStyles.block, styles.whatIs)} id={MenuItems.about}>
			<div className={clsx(mainStyles.gradient, styles.gradientPink)} />
			<div className={clsx(mainStyles.gradient, styles.gradientBlue)} />
			<Row justify="space-between">
				<Col md={{ span: 12, order: 0 }} xs={{ span: 24, order: 1 }}>
					<div className={clsx(mainStyles.images, styles.images)}>
						{whatIsImages.map(({ name, animated }) => (
							<div
								key={name}
								className={clsx(mainStyles.imageWrapper, styles.imageWrapper, styles[name])}
							>
								<Image
									src={`${landingImagePath}/whatIs/${name}.png`}
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
				<Col md={12} xs={{ span: 24, order: 0 }}>
					<div className={styles.content}>
						<h2 className={mainStyles.title}>
							<span className={mainStyles.primary}>Yavno</span> Data
						</h2>
						<p className={clsx(mainStyles.description, styles.description)}>
							— это сервис для управления онлайн-репутацией отелей, позволяющий мгновенно
							формировать всестороннюю аналитику на основе данных из открытых источников
						</p>
					</div>
				</Col>
			</Row>
		</div>
	)
}
export default WhatIs
