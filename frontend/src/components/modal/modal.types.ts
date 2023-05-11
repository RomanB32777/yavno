import { ModalProps } from 'antd'

export interface IModal extends ModalProps {
	topModal?: boolean
	noPadding?: boolean
	children?: React.ReactNode
}
