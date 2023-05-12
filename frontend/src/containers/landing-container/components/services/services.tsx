import Image from 'next/image'

import { Carousel } from 'antd'
import clsx from 'clsx'

import { landingImagePath, services } from 'containers/landing-container/landing-container.consts'

import styles from './services.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const Services = () => {
	return (
		<div className={clsx(mainStyles.block, styles.services)}>
			<div className={styles.list}>
				<Carousel
					autoplay
					slidesToShow={1}
					speed={1000}
					autoplaySpeed={4000}
					dots={false}
					draggable={false}
					swipeToSlide={false}
					variableWidth
				>
					{services.map(({ name }, index) => (
						<div className={styles.service} key={index}>
							<Image
								src={`${landingImagePath}/services/${name}.png`}
								className={styles.serviceImg}
								alt={name}
								fill
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}
export default Services
