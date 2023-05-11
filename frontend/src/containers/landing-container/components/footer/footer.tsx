import Image from 'next/image'

import clsx from 'clsx'

import Logo from 'components/layout/logo/logo'

import { contacts, socialNetworks } from 'containers/landing-container/landing-container.consts'

import { staticUrl } from 'consts'

import { MenuItems } from 'containers/landing-container/landing.types'

import styles from './footer.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const Footer = () => {
	return (
		<div className={clsx(mainStyles.block, styles.footer)} id={MenuItems.contacts}>
			<div className={clsx(mainStyles.gradient, styles.gradientPink)} />
			<div className={clsx(mainStyles.gradient, styles.gradientBlue)} />
			<div className={styles.content}>
				<div className={styles.contacts}>
					{contacts.map(({ type, value }, index) => {
						const contactLink = type === 'email' ? 'mailto' : 'tel'
						return (
							<a key={index} href={`${contactLink}:${value.trim()}`} className={styles.contact}>
								{value}
							</a>
						)
					})}
				</div>
				<div className={styles.socialNetworks}>
					{socialNetworks.map(({ name, link, width, height }) => (
						<a key={name} className={styles.socialNetwork} href={link} target="_blank">
							<Image
								src={`${staticUrl}/socials/${name}.svg`}
								alt={name}
								width={width}
								height={height}
							/>
						</a>
					))}
				</div>
				<Logo modificator={styles.logo} />
			</div>
		</div>
	)
}
export default Footer
