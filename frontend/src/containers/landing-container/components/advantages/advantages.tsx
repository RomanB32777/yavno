import Image from 'next/image'

import { Col, Row } from 'antd'
import clsx from 'clsx'

import {
	advantages,
	advantagesImages,
	landingImagePath,
} from 'containers/landing-container/landing-container.consts'

import styles from './advantages.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const Advantages = () => {
	return (
		<div className={clsx(mainStyles.block, styles.advantages)}>
			<div className={clsx(mainStyles.gradient, styles.gradientBlue)} />
			<Row justify="space-between">
				<Col md={14} xs={24}>
					<div className={styles.content}>
						<h3 className={clsx(mainStyles.title, styles.title)}>
							Почему клиенты выбирают <span className={mainStyles.primary}>Yavno</span> Data
						</h3>
						<ul className={mainStyles.list}>
							{advantages.map((item, index) => (
								<li key={index} className={clsx(mainStyles.listItem, styles.listItem)}>
									{item}
								</li>
							))}
						</ul>
					</div>
				</Col>
				<Col md={10} xs={24}>
					<div className={clsx(mainStyles.images, styles.images)}>
						{advantagesImages.map(({ name, animated }) => (
							<div
								key={name}
								className={clsx(mainStyles.imageWrapper, styles.imageWrapper, styles[name])}
							>
								<Image
									src={`${landingImagePath}/advantages/${name}.png`}
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
export default Advantages
