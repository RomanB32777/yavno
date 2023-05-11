import { Head, Html, Main, NextScript } from 'next/document'

import { interFont } from 'consts'

export default function Document() {
	return (
		<Html style={{ scrollBehavior: 'smooth' }}>
			<Head />
			<body className={interFont.variable}>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
