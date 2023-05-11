import { Control, FieldValue, FieldValues, Path, RegisterOptions } from 'react-hook-form'

export interface IComponentWithChildren {
	children: React.ReactNode
}

export interface IFormElement<FormControl extends FieldValues> {
	name: Path<FormControl>
	formControl: Control<FormControl, any>
	rules?: Omit<
		RegisterOptions<FormControl, Path<FormControl>>,
		'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>
	error?: string | null
	isNotValid?: boolean
	errorModificator?: string
	value?: FieldValue<FormControl>
}
