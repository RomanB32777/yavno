import { Controller, FieldValues } from 'react-hook-form'

import { Col, Row } from 'antd'
import clsx from 'clsx'

import useWindowDimensions from 'hooks/useWindowDimensions'

import { IFormInput } from './form-input.interface'

import styles from './form-input.module.scss'

const FormInput = <T extends FieldValues>({
	label,
	rules,
	name,
	formControl,
	placeholder,
	typeInput,
	value: propsValue,
	error: errorProp,
	isNotValid,
	disabled,
	modificator,
	descriptionModificator,
	errorModificator,
	descriptionInput,
	maxLength,
	inputCol,
	labelCol,
	gutter,
	rowProps,
	setValue,
}: IFormInput<T>) => {
	const { isMobile } = useWindowDimensions()

	const onWheel = (e: React.WheelEvent<HTMLInputElement>) => e.currentTarget.blur()

	const changeHandler =
		(onChange: (...event: any[]) => void) =>
		(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
			onChange(e.target.value)
			setValue?.(e.target.value)
		}

	return (
		<div className={styles.formInput}>
			<Row gutter={gutter || 0} {...rowProps}>
				{label && (
					<Col xs={24}>
						<p className={styles.label}>{label}</p>
					</Col>
				)}
				<Controller
					control={formControl}
					name={name}
					rules={rules}
					render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
						<>
							<Col md={inputCol || 24} xs={24}>
								<div className={clsx(styles.input, modificator)}>
									<input
										className={clsx({
											[styles.isNotValid]: invalid || isNotValid,
										})}
										value={propsValue ?? value}
										onChange={changeHandler(onChange)}
										disabled={disabled}
										name={name}
										type={typeInput || 'text'}
										maxLength={maxLength || 524288}
										onWheel={onWheel}
										placeholder={placeholder}
										min={0}
									/>
								</div>
							</Col>
							<Col span={24}>
								<div className={clsx(styles.error, errorModificator)}>
									{errorProp || error?.message}
								</div>
							</Col>
						</>
					)}
				/>
			</Row>
			{descriptionInput && (
				<Row>
					<Col
						offset={(!isMobile ? labelCol : 0) || (label && !isMobile ? 12 : 0)}
						md={inputCol || (label ? 12 : 24)}
						xs={24}
					>
						<div className={clsx(styles.description, descriptionModificator)}>
							{descriptionInput}
						</div>
					</Col>
				</Row>
			)}
		</div>
	)
}

export default FormInput
