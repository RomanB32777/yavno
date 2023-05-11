import { notification } from 'antd'

import { INotification } from 'types/notifications'

export const addNotification = ({ type, message, description, id }: INotification) => {
	notification.open({
		type,
		message,
		description,
		duration: 5,
		key: id,
	})
}
