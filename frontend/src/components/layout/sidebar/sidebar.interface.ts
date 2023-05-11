import { ItemType } from 'antd/es/menu/hooks/useItems'

export interface ISidebar {
	items: ItemType[]
	activeItem?: string
	hidden?: boolean
	collapsed: boolean
	width: number
	defaultOpenKeys?: string[]
	children?: React.ReactNode
	propStyles?: React.CSSProperties
	setCollapsed: (state: boolean) => any
}
