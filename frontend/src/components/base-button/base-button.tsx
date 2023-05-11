import clsx from 'clsx'

import { IBaseButton } from './base-button.interface'

import styles from './base-button.module.scss'

const BaseButton: React.FC<IBaseButton> = ({
	title,
	icon,
	isTransparent,
	disabled,
	modificator,
	onClick,
}) => {
	return (
		<button
			className={clsx(styles.button, modificator, {
				[styles.isTransparent]: isTransparent,
				[styles.disabled]: disabled || false,
			})}
			onClick={onClick}
		>
			{title}
			{icon && <div className={styles.icon}>{icon}</div>}
		</button>
	)
}

export default BaseButton
