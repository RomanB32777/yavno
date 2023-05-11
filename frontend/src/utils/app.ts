export const scrollToPosition = (top = 0) => {
	try {
		window.scroll({
			top: top,
			left: 0,
			behavior: 'smooth',
		})
	} catch (_) {
		window.scrollTo(0, top)
	}
}

export const isValidateFilledForm = (valuesArray: any[]) => valuesArray.every((val) => Boolean(val))

export const delay = ({ ms, cb }: { ms: number; cb: (params?: any) => any }) =>
	new Promise<void>((resolve) => {
		setTimeout(() => {
			cb()
			resolve()
		}, ms)
	})

export const formatNumber = (num: string | number, fraction: number = 2) => {
	const inNumberType = +num
	return Number.isInteger(inNumberType) ? inNumberType : inNumberType.toFixed(fraction)
}

export const getKeyFromObject = <T, K extends keyof T>(obj: T, key: K): K => key
