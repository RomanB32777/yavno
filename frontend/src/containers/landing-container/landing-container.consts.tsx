import { staticUrl } from 'consts'

import {
	FormImageNames,
	IContact,
	IFAQ,
	IForWhom,
	IImageBase,
	IImageSize,
	ISocialNetwork,
	MenuItemKeys,
} from './landing.types'

export const landingImagePath = `${staticUrl}/landing`

export const menu: Record<Exclude<MenuItemKeys, 'form'>, React.ReactNode> = {
	about: 'О проекте',
	clients: 'Клиентам',
	faq: 'FAQ',
	contacts: 'Контакты',
}

export const bannerImages: IImageBase[] = [
	{ name: 'circles', width: 525, height: 525 },
	{ name: 'dashboard', width: 550, height: 420, animated: true },
	{ name: 'mobile', width: 250, height: 360, animated: true },
]

export const services: IImageBase[] = [
	{ name: 'yandex', width: 281, height: 61 },
	{ name: 'tripadvisor', width: 210, height: 61 },
	{ name: 'google', width: 243, height: 61 },
	{ name: 'ostrovok', width: 237, height: 61 },
	{ name: 'onetwotrip', width: 57, height: 61 },
]

export const whatIsImages: IImageBase[] = [
	{ name: 'photo', width: 562, height: 360 },
	{ name: 'cards', width: 480, height: 275, animated: true },
	{ name: 'diagram', width: 146, height: 146, animated: true },
]

export const advantagesImages: IImageBase[] = [
	{ name: 'circles', width: 525, height: 525 },
	{ name: 'photo', width: 562, height: 360 },
	{ name: 'photoMobile', width: 562, height: 360 },
	{ name: 'feedback', width: 480, height: 275, animated: true },
	{ name: 'dashboard', width: 146, height: 146, animated: true },
]

export const advantages = [
	'Выявляют актуальные зоны неудовлетворенности клиентов',
	'Своевременно реагируют на отзывы гостей',
	'Анализируют ключевые метрики репутации и определяют тренды',
	'Принимают обоснованные операционные и бизнес-решения',
	'Повышают уровень доверия и улучшают репутацию бренда',
	'Выявляют конкурентные преимущества',
	'Увеличивают продажи',
]

export const resultsImages: IImageBase[] = [
	{ name: 'photo', width: 562, height: 360 },
	{ name: 'photoMobile', width: 562, height: 360 },
	{ name: 'feedback', width: 480, height: 275, animated: true },
	{ name: 'dashboard', width: 146, height: 146, animated: true },
]

export const results = [
	'Применяем технологии искусственного интеллекта и машинного обучения ',
	'Специализируемся на сфере гостиничного бизнеса',
	'Умеем обрабатывать большие объемы данных',
	'Обеспечиваем прямое взаимодействие с клиентами',
	'Уведомляем о новых отзывах в режиме реального времени',
	'Производим анализ конкурентов',
	'Автоматизируем процессы анализа отзывов с персонализированным дашбордом',
	'Используем полностью российское ПО',
]

export const steps = [
	'Зарегистрируйтесь',
	'Получите консультацию наших специалистов',
	'Определите актуальные отели и источники данных',
	'Получите доступ к продукту  и улучшайте свою онлайн-репутацию',
]

export const forWhom: IForWhom[] = [
	{
		title: 'Крупные сетевые отели и управляющие компании',
		image: { name: 'beach', width: 110, height: 110 },
	},
	{
		title: 'Небольшие семейные гостиницы и бутик-отели',
		image: { name: 'cakes', width: 110, height: 110 },
	},
	{
		title: 'Организации по управлению туристскими территориями',
		image: { name: 'people', width: 110, height: 110 },
	},
	{
		title: 'Аналитические и консалтинговые агентства',
		image: { name: 'man', width: 110, height: 110 },
	},
	{
		title: 'Туроператоры и турагенты',
		image: { name: 'hotel', width: 110, height: 110 },
	},
]

export const faq: IFAQ[] = [
	{
		title: 'Что такое анализ тональности и как он применим к сфере гостеприимства?',
		description:
			'Yavno Data - это сервис анализа отзывов гостей отелей с помощью анализа тональности (настроения , который позволяет получить обоснованные рекомендации по улучшению репутации отеля. Сервис анализирует отзывы гостей и выделяет ключевые проблемы и сильные стороны отеля, чтобы помочь ему улучшить свою репутацию.',
	},
	{
		title: 'Сколько стоит улучшить онлайн-репутацию?',
		description:
			'Репутация бесценна. Но мы все равно предоставляем 1 месяц бесплатного пробного периода, по результатам которого стоимость рассчитывается индивидуально в зависимости от периода пользования, количества добавленных средств размещения и общей нагрузки.',
	},
	{
		title: 'Как скоро я получу дашборд и рекомендации по улучшению?',
		description:
			'Для средств размещения система автоматически собирает данные об отзывах и рейтингах в течение нескольких минут после его добавления, и вы можете сразу приступить к использованию сервиса. Для других пользователей все зависит от технического задания.',
	},
	{
		title: 'Какие именно рекомендации по улучшению репутации предоставляет Yavno Data?',
		description:
			'Yavno Data предоставляет персонализированные рекомендации для улучшения репутации отеля, основанные на анализе онлайн-отзывов. Рекомендации могут касаться различных аспектов, включая качество обслуживания, чистоту номеров, расположение и т.д. Каждая рекомендация сопровождается подробным объяснением и рекомендациями по ее реализации.',
	},
	{
		title: 'Будет ли у моих коллег доступ к сервису?',
		description:
			'Да, вы можете предоставить доступ к любому из ваших отелей в Yavno Data другим пользователям',
	},
	{
		title: 'Какие именно данные анализирует Yavno Data для улучшения репутации отеля?',
		description:
			'Мы  анализируем данные отзывов гостей, включая текстовое содержание отзывов, оценки гостей, категории комментариев и даты написания отзывов. Также, возможность анализа социальных сетей и новостных статей находится в стадии разработки.',
	},
	{
		title:
			'Как быстро можно ожидать улучшения онлайн-репутации отеля после начала использования Yavno Data?',
		description:
			'Темпы улучшения репутации отеля зависит от многих факторов, включая общее количество отзывов, типы комментариев и характеристики гостей. Однако, в целом, использование Yavno Data поможет улучшить репутацию отеля в течение нескольких месяцев.',
	},
	{
		title:
			'Можно ли интегрировать Yavno Data с другими сервисами и платформами для автоматической синхронизации данных?',
		description:
			'Да, Yavno Data предоставляет возможность интеграции с другими сервисами и платформами для автоматической синхронизации данных. Это может включать интеграцию с популярными сайтами отзывов, системами управления отелями и другими сервисами. Также, мы предоставляем индивидуальный подход к каждому клиенту, поэтому если у вас возникнут любые вопросы, наши специалисты будут рады провести бесплатную консультацию.',
	},
	{
		title: 'Какие гарантии безопасности и конфиденциальности данных предоставляет Yavno Data?',
		description:
			'Yavno Data предоставляет высокую степень безопасности и конфиденциальности данных. Вся информация, связанная с вашим отелем или техническим заданием, остается полностью конфиденциальной и недоступной для третьих лиц. Кроме того, мы гарантируем соблюдение всех требований к обработке персональных данных, установленных законодательством РФ',
	},
]

export const formImages: Record<FormImageNames, IImageSize> = {
	hotel: { width: 562, height: 360, animated: true },
	diagram: { width: 525, height: 525, animated: true },
	lines: { width: 480, height: 275, animated: true },
	sea: { width: 146, height: 146, animated: true },
	modalIcon: { width: 99, height: 92 },
}

export const contacts: IContact[] = [
	{ type: 'phone', value: '+7 953 291 93 41' },
	{ type: 'email', value: 'yavno.data@gmail.com' },
]

export const socialNetworks: ISocialNetwork[] = [
	{ name: 'vk', link: 'https://vk.com/yavnodata', icon: '', width: 38, height: 22 },
	{ name: 'dzen', link: 'https://dzen.ru/yavnodata', icon: '', width: 35, height: 35 },
	{ name: 'vc', link: 'https://vc.ru/u/1708595-yavno-data', icon: '', width: 38, height: 40 },
	{
		name: 'insta',
		link: 'https://www.instagram.com/yavno.data/',
		icon: '',
		width: 40,
		height: 40,
	},
	{
		name: 'facebook',
		link: 'https://www.facebook.com/yavnodata',
		icon: '',
		width: 41,
		height: 40,
	},
	{ name: 'telegram', link: 'https://t.me/yavnodata', icon: '', width: 40, height: 30 },
]
