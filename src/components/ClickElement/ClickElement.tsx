import React from 'react';
import { mergeClassNames } from '../../helpers';
import getNames from './getNames';
import useCss from './useCss';
import { IBaseComponentProps } from '../../types';

export interface IClickElementProps extends IBaseComponentProps {
    onClick?: (event: any) => void;
    children?: React.ReactElement | React.ReactElement[];
}

function ClickElement(props: IClickElementProps) {

	const { ID, CLASS } = useCss(getNames(props.id));

	const _onClick = props.onClick != null ? props.onClick : undefined;

	return <div
		id={ID.ROOT}
		className={mergeClassNames(CLASS.ROOT, props.className, {
			[CLASS.ACTIVE]: props.onClick !== null,
		})}
		onClick={event => _onClick && _onClick(event)}
	>
		{props.children}
	</div>;
}

ClickElement.getNames = getNames;

export default ClickElement;
