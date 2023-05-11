import React, { useEffect } from 'react'

import { Modal as AntdModal } from 'antd'
import clsx from 'clsx'

import { IModal } from './modal.types'

import styles from './modal.module.scss'

const Modal: React.FC<IModal> = ({
	width,
	confirmLoading,
	topModal,
	centered,
	noPadding,
	children,
	className,
	...props
}) => (
	<AntdModal
		{...props}
		confirmLoading={confirmLoading}
		width={width || 520}
		style={{ top: topModal ? 20 : centered ? 0 : 100 }}
		footer={null}
		bodyStyle={{
			padding: noPadding ? 0 : 24,
		}}
		centered={centered}
		className={clsx('app-modal', className)}
	>
		<div
			className={clsx(styles.contentWrapper, {
				[styles.noPadding]: noPadding,
			})}
		>
			{children}
		</div>
	</AntdModal>
)

export default Modal
