import React from 'react';
import { IBaseComponentProps } from '../../types';
import getNames from './getNames';
import useCss from './useCss';
import LabelWrapper from '../LabelWrapper/LabelWrapper';
import { mergeClassNames } from '../../helpers';

export interface IInputProps extends IBaseComponentProps, Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'placeholder' | 'onKeyDown'> {
    label: string,
    onChange?: (value: string) => void,
    fieldRef?: React.RefObject<HTMLInputElement>,
    tag?: 'div' | 'label',
    disabled?: boolean,
}

function Input(props: IInputProps) {
	const { ID, CLASS } = useCss(getNames(props.id));

	const handleOnChange = (e: any) => {
		const value = e.target.value;
		props.onChange && props.onChange(value);
	};

	return <LabelWrapper
		id={ID.ROOT}
		className={mergeClassNames(CLASS.ROOT, props.className)}
		text={props.label}
		tag={props.tag}
	>
		<input
			id={ID.FIELD}
			className={CLASS.FIELD}
			value={props.value}
			placeholder={props.placeholder}
			onKeyDown={props.onKeyDown}
			ref={props.fieldRef}
			onChange={handleOnChange}
			disabled={props.disabled}
		/>
	</LabelWrapper>;
}

Input.getNames = getNames;

export default Input;