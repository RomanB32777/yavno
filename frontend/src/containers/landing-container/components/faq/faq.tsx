import { useState } from 'react'

import { Collapse } from 'antd'
import clsx from 'clsx'

import BaseButton from 'components/base-button/base-button'
import { ArrowIcon } from 'components/icons'

import { faq } from 'containers/landing-container/landing-container.consts'

import { MenuItems } from 'containers/landing-container/landing.types'

import styles from './faq.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const { Panel } = Collapse

const minCount = 4

const FAQ = () => {
	const [visibleItems, setVisibleItems] = useState(minCount)

	const buttonHandler = () => {
		setVisibleItems((count) => (count === minCount ? faq.length : minCount))
	}

	const isMinVisible = visibleItems === minCount

	return (
		<div className={clsx(mainStyles.block, styles.faq)} id={MenuItems.faq}>
			<div className={clsx(mainStyles.gradient, styles.gradientPink)} />
			<div className={clsx(mainStyles.gradient, styles.gradientBlue)} />
			<div className={styles.content}>
				<h3 className={clsx(mainStyles.title, styles.title)}>FAQ</h3>
				<Collapse
					expandIcon={({ isActive }) => (
						<ArrowIcon modificator={clsx(styles.arrow, { [styles.isActive]: isActive })} />
					)}
					className={styles.list}
					expandIconPosition="end"
					bordered={false}
				>
					{faq
						.filter((_, index) => index < visibleItems)
						.map(({ title, description }, index) => (
							<Panel header={<span className={styles.item}>{title}</span>} key={index}>
								<p className={styles.itemDescription}>{description}</p>
							</Panel>
						))}
				</Collapse>
				<BaseButton
					title={`Показать ${isMinVisible ? 'больше' : 'меньше'}`}
					modificator={clsx(mainStyles.button, styles.button)}
					onClick={buttonHandler}
					isTransparent
				/>
			</div>
		</div>
	)
}
export default FAQ
