import { FC } from 'react'

import Link from 'next/link'

import clsx from 'clsx'

import BaseButton from 'components/base-button/base-button'

import { ILandingBtn } from './landing-button.interface'

import { MenuItems } from 'containers/landing-container/landing.types'

import mainStyles from 'containers/landing-container/landing.module.scss'

const LandingButton: FC<ILandingBtn> = ({ title, modificator, isTransparent }) => {
	return (
		<Link href={`#${MenuItems.form}`} scroll={false}>
			<BaseButton
				title={title}
				modificator={clsx(mainStyles.button, modificator)}
				isTransparent={isTransparent}
			/>
		</Link>
	)
}

export default LandingButton
