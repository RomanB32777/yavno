import { HTMLInputTypeAttribute } from 'react'
import { FieldValues } from 'react-hook-form'

import { RowProps } from 'antd'

import { IFormElement } from 'types'

export interface IFormInput<FormControl extends FieldValues> extends IFormElement<FormControl> {
	label?: React.ReactNode
	placeholder?: string
	placeholderValues?: Record<string, string | number>
	typeInput?: HTMLInputTypeAttribute
	disabled?: boolean
	modificator?: string
	descriptionModificator?: string
	descriptionInput?: React.ReactNode
	maxLength?: number
	// isTextarea?: boolean
	inputCol?: number
	labelCol?: number
	gutter?: number | [number, number]
	rowProps?: RowProps
	setValue?: (value: string) => void
}
