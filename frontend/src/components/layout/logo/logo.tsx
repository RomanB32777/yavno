import { FC, memo } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { staticUrl } from 'consts'

import { ILogo } from './logo.interface'

import styles from './logo.module.scss'

const Logo: FC<ILogo> = ({ navigateUrl = '/', modificator }) => {
	return (
		<Link className={clsx(styles.logo, modificator)} href={navigateUrl}>
			<Image src={`${staticUrl}/logo.png`} alt="" width={168} height={44} />
		</Link>
	)
}

export default memo(Logo)
