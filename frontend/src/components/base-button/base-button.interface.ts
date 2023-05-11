export interface IBaseButton {
	title?: string
	isTransparent?: boolean
	disabled?: boolean
	modificator?: string
	icon?: React.ReactNode
	onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void
}
