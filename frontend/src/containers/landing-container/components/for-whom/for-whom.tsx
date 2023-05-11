import Image from 'next/image'

import { Col, Row } from 'antd'
import clsx from 'clsx'

import { forWhom, landingImagePath } from 'containers/landing-container/landing-container.consts'

import styles from './for-whom.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const ForWhom = () => {
	return (
		<div className={clsx(mainStyles.block, styles.forWhom)}>
			<div className={clsx(mainStyles.gradient, styles.gradientPink)} />
			<div className={clsx(mainStyles.gradient, styles.gradientBlue)} />
			<div className={styles.content}>
				<h3 className={clsx(mainStyles.title, styles.title)}>
					Кто выбирает <span className={mainStyles.primary}>Yavno</span> Data?
				</h3>
				<Row justify="center" gutter={[16, 16]}>
					{forWhom.map(({ title, image: { name, width, height } }, index) => (
						<Col md={12} xs={24} key={index}>
							<div className={styles.item}>
								<Image
									className={styles.image}
									src={`${landingImagePath}/forWhom/${name}.png`}
									alt={name}
									width={width}
									height={height}
								/>
								<p className={styles.description}>{title}</p>
							</div>
						</Col>
					))}
				</Row>
			</div>
		</div>
	)
}
export default ForWhom
