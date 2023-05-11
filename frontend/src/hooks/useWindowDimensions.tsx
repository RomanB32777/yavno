import { useEffect, useState } from 'react'

export enum BreakPointWidth {
	smallest = 480,
	small = 576,
	mobile = 768,
	tablet = 992,
	laptop = 1200,
}

const useWindowDimensions = () => {
	const hasWindow = typeof window !== 'undefined'

	const getWindowDimensions = () => {
		const width = hasWindow ? window.innerWidth : null
		const height = hasWindow ? window.innerHeight : null
		const isMobile = width && width <= BreakPointWidth.mobile
		const isTablet = width && width <= BreakPointWidth.tablet
		const isLaptop = width && width <= BreakPointWidth.laptop

		return {
			width,
			height,
			isMobile,
			isTablet,
			isLaptop,
		}
	}

	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		if (hasWindow) {
			const handleResize = () => {
				setWindowDimensions(getWindowDimensions())
			}

			window.addEventListener('resize', handleResize)
			return () => window.removeEventListener('resize', handleResize)
		}
	}, [hasWindow])

	return windowDimensions
}

export default useWindowDimensions
