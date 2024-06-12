import React from 'react';
import {IBaseComponentProps} from '../../types';
import getNames from './getNames';
import useCss, {ICss} from './useCss';
import {mergeClassNames} from '../../helpers';

export interface ICollapsibleElementProps extends IBaseComponentProps, ICss {
	isOpen: boolean;
	children?: React.ReactElement | React.ReactElement[] | null | false;
}

function CollapsibleElement(props: ICollapsibleElementProps) {
	const {ID, CLASS} = useCss(getNames(props.id), {
		minHeight: props.minHeight,
		height: props.height
	});

	return <div
		id={ID.ROOT}
		className={mergeClassNames(CLASS.ROOT, props.className, {
			[CLASS.OPEN]: props.isOpen
		})}
		style={props.style}
	>
		<div id={ID.CHILDREN_WRAPPER} className={CLASS.CHILDREN_WRAPPER}>
			{props.children}
		</div>
	</div>;
}

CollapsibleElement.getNames = getNames;

export default CollapsibleElement;