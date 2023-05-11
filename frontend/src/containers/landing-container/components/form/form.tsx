import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import Image from 'next/image'

import { Col, Row } from 'antd'
import axios, { AxiosError } from 'axios'
import clsx from 'clsx'

import BaseButton from 'components/base-button/base-button'
import FormInput from 'components/form-input/form-input'
import Modal from 'components/modal/modal'

import { addNotification } from 'utils'

import { formImages, landingImagePath } from 'containers/landing-container/landing-container.consts'

import { initForm } from './form.consts'

import { IForm } from './form.interface'

import { FormImageNames, MenuItems } from 'containers/landing-container/landing.types'

import styles from './form.module.scss'
import mainStyles from 'containers/landing-container/landing.module.scss'

const sendNewRow = async (formData: IForm) => {
	if (!process.env.SHEET_URL) throw new Error('Нет ссылки для заполнения формы')
	const { data } = await axios.post(process.env.SHEET_URL, { ...formData, date: new Date() })
	return data
}

const Form = () => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const {
		reset,
		handleSubmit,
		control,
		formState: { isValid },
	} = useForm<IForm>({ mode: 'onChange', defaultValues: initForm })

	const { mutate, isLoading, isSuccess, error } = useMutation<any, AxiosError, IForm>(
		(newRow: IForm) => sendNewRow(newRow)
	)

	const submitHandler: SubmitHandler<IForm> = async (formData) => mutate(formData)

	const modalHandler = () => setIsOpenModal((prev) => !prev)

	const { modalIcon } = formImages
	const modalIconName = Object.keys(formImages).find(
		(name) => (name as FormImageNames) === 'modalIcon'
	)

	useEffect(() => {
		if (isSuccess) {
			setIsOpenModal(true)
			reset()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSuccess])

	useEffect(() => {
		if (error) {
			const { message } = error
			addNotification({ type: 'error', message })
		}
	}, [error])

	return (
		<div className={styles.formWrapper} id={MenuItems.form}>
			<div className={mainStyles.block}>
				<Row justify="space-between">
					<Col md={10} xs={24}>
						<div className={styles.content}>
							<h3 className={clsx(mainStyles.title, styles.title)}>
								Улучшайте репутацию своего бизнеса с помощью
								<span className={mainStyles.primary}> Yavno</span> Data
							</h3>
							<form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
								<div className={styles.inputWrapper}>
									<FormInput
										formControl={control}
										typeInput="text"
										name="fio"
										rules={{
											required: 'Заполните ФИО',
										}}
										label="ФИО"
									/>
								</div>
								<div className={styles.inputWrapper}>
									<FormInput
										formControl={control}
										typeInput="text"
										name="company"
										rules={{
											required: 'Заполните название компании',
										}}
										label="Название компании"
									/>
								</div>
								<div className={styles.inputWrapper}>
									<FormInput
										formControl={control}
										typeInput="text"
										name="position"
										rules={{
											required: 'Заполните должность',
										}}
										label="Должность"
									/>
								</div>
								<div className={styles.inputWrapper}>
									<FormInput
										formControl={control}
										typeInput="email"
										name="email"
										rules={{
											required: 'Заполните email',
											pattern: {
												value: /\S+@\S+\.\S+/,
												message: 'Введенное значение не соответствует формату email',
											},
										}}
										label="Email"
									/>
								</div>
								<div className={styles.inputWrapper}>
									<FormInput
										formControl={control}
										typeInput="text"
										name="phone"
										rules={{
											required: 'Заполните телефон',
										}}
										label="Телефон"
									/>
								</div>
								<BaseButton
									title="Попробовать бесплатно"
									modificator={clsx(mainStyles.button, styles.button)}
									disabled={!isValid || isLoading}
								/>
							</form>
						</div>
					</Col>
					<Col md={12} xs={0}>
						<div className={mainStyles.images}>
							{Object.entries(formImages)
								.filter(([name]) => (name as FormImageNames) !== 'modalIcon')
								.map(([name, { animated }]) => (
									<div
										key={name}
										className={clsx(mainStyles.imageWrapper, styles.imageWrapper, styles[name])}
									>
										<Image
											src={`${landingImagePath}/form/${name}.png`}
											className={clsx(mainStyles.image, {
												[mainStyles.animated]: animated,
											})}
											alt={name}
											fill
										/>
									</div>
								))}
						</div>
					</Col>
				</Row>
			</div>
			<Modal open={isOpenModal} onCancel={modalHandler} centered noPadding>
				<div className={styles.modal}>
					<div className={clsx(mainStyles.gradient, styles.modalGradientBlue)} />
					<Image
						src={`${landingImagePath}/form/${modalIconName}.png`}
						width={modalIcon.width}
						height={modalIcon.height}
						className={styles.modalIcon}
						alt="success"
					/>
					<h3 className={styles.modalTitle}>Заголовок в одну строку</h3>
					<p className={styles.modalDescription}>
						Ваша заявка отправлена. Менеджер свяжется с вами в ближайшее время.
					</p>
					<BaseButton
						title="Ок"
						onClick={modalHandler}
						modificator={clsx(mainStyles.button, styles.modalButton)}
					/>
					<div className={clsx(mainStyles.gradient, styles.modalGradientPink)} />
				</div>
			</Modal>
		</div>
	)
}
export default Form
