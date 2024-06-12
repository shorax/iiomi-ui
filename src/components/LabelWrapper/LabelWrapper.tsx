import React from 'react';
import { IBaseComponentProps } from '../../types';
import getNames from './getNames';
import useCss from './useCss';
import { mergeClassNames } from '../../helpers';
import Label from '../Label/Label';

export interface ILabelWrapperProps extends IBaseComponentProps {
    text: string,
    tag?: 'label' | 'div',
    size?: 'small' | 'default',
    children?: React.ReactElement | React.ReactElement[];
}

function LabelWrapper(props: ILabelWrapperProps) {
	const { ID, CLASS } = useCss(getNames(props.id));

	return <div
		id={ID.ROOT}
		className={mergeClassNames(CLASS.ROOT, props.className)}
	>
		<Label
			id={ID.LABEL}
			className={CLASS.LABEL}
			tag={props.tag ?? 'label'}
			size={props.size ?? 'small'}
			bold
		>
			{props.text}
		</Label>
		{props.children}
	</div>;
}

LabelWrapper.getNames = getNames;

export default LabelWrapper;