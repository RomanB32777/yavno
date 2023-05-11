import Image from 'next/image'

import { Col, Row } from 'antd'
import clsx from 'clsx'

import LandingButton from '../landing-button/landing-button'

import {
	bannerImages,
	landingImagePath,
} from 'containers/landing-container/landing-container.consts'

import styles from './main-banner.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const MainBanner = () => {
	return (
		<div className={clsx(mainStyles.block, styles.banner)}>
			<div className={clsx(mainStyles.gradient, styles.gradientPink)} />
			<div className={clsx(mainStyles.gradient, styles.gradientBlue)} />
			<Row justify="space-between">
				<Col md={12} xs={24}>
					<div className={styles.content}>
						<h1 className={clsx(mainStyles.title, styles.title)}>
							Превращаем отзывы в бизнес актив
						</h1>
						<p className={mainStyles.description}>
							Комплексный анализ отзывов для успешного управления, развития бизнеса и повышения
							удовлетворенности гостей
						</p>
						<LandingButton
							title="Попробовать бесплатно"
							modificator={styles.button}
							isTransparent
						/>
					</div>
				</Col>
				<Col md={12} xs={24}>
					<div className={clsx(mainStyles.images, styles.images)}>
						{bannerImages.map(({ name, animated }) => (
							<div
								className={clsx(mainStyles.imageWrapper, styles.imageWrapper, styles[name])}
								key={name}
							>
								<Image
									src={`${landingImagePath}/banner/${name}.png`}
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
			</Row>
		</div>
	)
}

export default MainBanner
