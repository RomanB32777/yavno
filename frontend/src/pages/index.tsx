import LandingContainer from 'containers/landing-container/landing-container'

import Metatags from 'components/metatags/metatags'

import { NextPageWithProps } from 'types'

const Landing: NextPageWithProps = () => {
	return (
		<>
			<Metatags
				title="Главная"
				description="Сервис для управления онлайн-репутацией отелей, позволяющий мгновенно формировать всестороннюю аналитику на основе данных из открытых источников"
				isIndexed
			/>
			<LandingContainer />
		</>
	)
}

export default Landing
