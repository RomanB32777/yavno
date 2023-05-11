import { IBaseIcon } from './icons.interface'

export const ArrowIcon = ({ modificator }: IBaseIcon) => (
	<svg
		className={modificator}
		width="18"
		height="10"
		viewBox="0 0 18 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15.25 2.18557e-07L9 6.25L2.75 1.31134e-06L0.250002 1.25L9 10L17.75 1.25L15.25 2.18557e-07Z"
			fill="#2091F9"
		/>
	</svg>
)

export const DawIcon = () => (
	<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M1.2766 3.375L4.46809 6.89063L10.7234 0L12 0.703125L4.46809 9L0 4.07813L1.2766 3.375Z"
			fill="#A8C5DA"
		/>
	</svg>
)

export const MenuMobileIcon = () => (
	<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M4 8H28M4 16H28M4 24H28"
			stroke="black"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
