import { Col, Row } from 'antd'
import clsx from 'clsx'

import { steps } from 'containers/landing-container/landing-container.consts'

import styles from './steps.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const StepLine = () => (
	<svg width="102" height="3" viewBox="0 0 102 3" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			opacity="0.9"
			d="M1 1L55.0816 1.73171L101 2"
			stroke="url(#paint0_linear_501_2343)"
			strokeLinecap="round"
			strokeDasharray="10 10"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_501_2343"
				x1="85.6331"
				y1="20225"
				x2="-103.347"
				y2="20225"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#C6D8EA" />
				<stop offset="1" stopColor="#C6D8EA" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
)

const Steps = () => {
	return (
		<div className={clsx(mainStyles.block, styles.steps)}>
			<div className={styles.content}>
				<h3 className={clsx(mainStyles.title, styles.title)}>
					Процесс работы с <span className={mainStyles.primary}>Yavno</span> Data
				</h3>
				<Row justify="space-between">
					{steps.map((item, index) => {
						const currIndex = index + 1
						return (
							<Col md={5} xs={24} key={index}>
								<div className={styles.step}>
									<span className={styles.number}>{currIndex}</span>
									<p className={styles.description}>{item}</p>
									{currIndex !== steps.length && (
										<div className={styles.line}>
											<StepLine />
										</div>
									)}
								</div>
							</Col>
						)
					})}
				</Row>
			</div>
		</div>
	)
}
export default Steps
