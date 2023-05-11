export interface IHeader {
	visibleLogo?: boolean
	logoUrl?: string
	visibleMenuIcon?: boolean
	hidden?: boolean
	contentModificator?: string
	modificator?: string
	propStyles?: React.CSSProperties
	collapsedSidebar?: boolean
	children?: React.ReactNode
	mobileContentCol?: number
	setCollapsedSidebar?: (status: boolean) => void
	onClick?: () => void
}
