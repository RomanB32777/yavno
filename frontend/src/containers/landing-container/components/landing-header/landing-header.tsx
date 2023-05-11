import { useMemo, useState } from 'react'

import Link from 'next/link'

import { Col, Menu, Row } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import clsx from 'clsx'

import Header from 'components/layout/header/header'
import Sidebar from 'components/layout/sidebar/sidebar'

import LandingButton from '../landing-button/landing-button'

import useWindowDimensions from 'hooks/useWindowDimensions'

import { menu } from 'containers/landing-container/landing-container.consts'

import styles from './landing-header.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const LandingHeader = () => {
	const { isMobile } = useWindowDimensions()
	const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(true)

	const menuItems: ItemType[] = useMemo(
		() =>
			Object.entries(menu).map(([key, label]) => {
				const link = `#${key}`
				return {
					key: link,
					label: (
						<Link href={link} scroll={false} className={styles.menuLink}>
							{label}
						</Link>
					),
				}
			}),
		[]
	)

	return (
		<>
			<div className={clsx(mainStyles.gradient, styles.gradientBlue)} />
			<Header
				modificator={clsx(mainStyles.padding, styles.headerModificator)}
				setCollapsedSidebar={setIsCollapsedSidebar}
				collapsedSidebar={isCollapsedSidebar}
				mobileContentCol={18}
				visibleMenuIcon
				visibleLogo
			>
				<Row justify={{ xs: 'end', md: 'space-between' }} align="middle">
					<Col xs={0} md={16}>
						<Menu
							mode="horizontal"
							className={styles.menu}
							items={menuItems}
							// defaultSelectedKeys={[menuItems[0]?.key]}
						/>
					</Col>
					<Col md={{ pull: 0 }} xs={{ span: 6, pull: 6 }}>
						<LandingButton
							title={isMobile ? 'Демо' : 'Запросить Демо'}
							modificator={styles.headerButton}
						/>
					</Col>
				</Row>
			</Header>
			<Sidebar
				items={menuItems}
				collapsed={isCollapsedSidebar}
				setCollapsed={setIsCollapsedSidebar}
				width={325}
			/>
		</>
	)
}
export default LandingHeader
