import { Layout as AntdLayout } from 'antd'

import { IComponentWithChildren } from 'types'

import styles from './layout.module.scss'

const { Content } = AntdLayout

const Layout: React.FC<IComponentWithChildren> = ({ children }) => {
	return (
		<AntdLayout className={styles.layout}>
			<Content className={styles.contentContainer}>
				<div className={styles.content}>{children}</div>
			</Content>
		</AntdLayout>
	)
}
export default Layout
