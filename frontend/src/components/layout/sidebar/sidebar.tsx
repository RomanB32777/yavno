import { useEffect, useState } from 'react'

import { Layout, Menu } from 'antd'
import clsx from 'clsx'

import { ISidebar } from './sidebar.interface'

import styles from './sidebar.module.scss'

const { Sider } = Layout

const Sidebar: React.FC<ISidebar> = ({
	items,
	activeItem,
	hidden,
	width,
	collapsed,
	children,
	propStyles,
	setCollapsed,
}) => {
	const [isVisibleContent, setIsVisibleContent] = useState(false)

	const collapseHandler =
		(state: boolean = true) =>
		() => {
			setCollapsed(state)
		}

	const menuItemHandler = () => setCollapsed(true)

	useEffect(() => {
		if (!collapsed) {
			setIsVisibleContent(false)
			setTimeout(() => setIsVisibleContent(true), 200)
		} else setIsVisibleContent(false)
	}, [collapsed])

	return (
		<>
			<div className={styles.wrapper}>
				<Sider
					collapsible
					hidden={hidden}
					width={width}
					collapsed={collapsed}
					collapsedWidth="0"
					className={styles.sidebar}
					style={propStyles}
					trigger={null}
				>
					<div
						className={clsx(styles.content, {
							[styles.visible]: isVisibleContent,
						})}
					>
						<div>
							{children}
							<Menu
								triggerSubMenuAction="click"
								mode="inline"
								className="sidebarMenu"
								selectedKeys={activeItem ? [activeItem] : undefined}
								onClick={menuItemHandler}
								items={items}
								tabIndex={0}
								aria-haspopup={true}
								aria-expanded={true}
							/>
						</div>
					</div>
				</Sider>
			</div>
			{!collapsed && <div className={styles.overlay} onClick={collapseHandler()} />}
		</>
	)
}

export default Sidebar
