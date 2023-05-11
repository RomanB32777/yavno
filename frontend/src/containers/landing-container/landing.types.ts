interface ITitle {
	title: string
}

export enum MenuItems {
	about = 'about',
	clients = 'clients',
	faq = 'faq',
	contacts = 'contacts',
	form = 'form',
}

export type MenuItemKeys = keyof typeof MenuItems

export interface IImageSize {
	width: number
	height: number
	animated?: boolean
}

export interface IImageBase extends IImageSize {
	name: string
}

export interface IForWhom extends ITitle {
	image: IImageBase
}

export interface IFAQ extends ITitle {
	description: string
}

export type FormImageNames = 'diagram' | 'hotel' | 'lines' | 'sea' | 'modalIcon'

export interface IContact {
	type: 'phone' | 'email'
	value: string
}

export interface ISocialNetwork extends IImageSize {
	icon: React.ReactNode
	name: string
	link: string
}
