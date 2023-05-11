import { Col, Row } from 'antd'
import { Header as AntdHeader } from 'antd/lib/layout/layout'
import clsx from 'clsx'

import { MenuMobileIcon } from 'components/icons'
import Logo from 'components/layout/logo/logo'

import { IHeader } from './header.interface'

import styles from './header.module.scss'

const Header: React.FC<IHeader> = ({
	hidden,
	visibleLogo,
	visibleMenuIcon,
	logoUrl,
	contentModificator,
	modificator,
	propStyles,
	collapsedSidebar,
	children,
	mobileContentCol = 14,
	setCollapsedSidebar,
	onClick,
}) => {
	return (
		<AntdHeader
			className={clsx(styles.header, modificator)}
			hidden={hidden}
			onClick={onClick}
			style={{
				...propStyles,
			}}
		>
			<Row
				justify="space-between"
				align="middle"
				className={clsx(styles.contentContainer, contentModificator)}
			>
				{visibleMenuIcon && (
					<div className={styles.menuIcon} onClick={() => setCollapsedSidebar?.(!collapsedSidebar)}>
						<MenuMobileIcon />
					</div>
				)}
				{visibleLogo && (
					<Col xs={6}>
						<div className={styles.left}>
							<Logo navigateUrl={logoUrl || '/'} />
						</div>
					</Col>
				)}
				<Col xs={!visibleLogo ? 24 : mobileContentCol}>
					<div className={styles.right}>{children}</div>
				</Col>
			</Row>
		</AntdHeader>
	)
}

export default Header
