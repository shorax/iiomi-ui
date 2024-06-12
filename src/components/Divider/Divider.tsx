import React from 'react';
import {mergeClassNames} from '../../helpers';
import getNames from './getNames';
import useCss from './useCss';
import {IBaseComponentProps} from '../../types';

export interface IDividerProps extends IBaseComponentProps {
	layout: 'horizontal' | 'vertical';
}

function Divider(props: IDividerProps) {

	const {ID, CLASS} = useCss(getNames(props.id));

	return <div id={ID.ROOT}
		className={mergeClassNames(CLASS.ROOT, props.className, {
			[CLASS.HORIZONTAL]: props.layout === 'horizontal',
			[CLASS.VERTICAL]: props.layout === 'vertical'
		})}
	/>;
}

Divider.getNames = getNames;

export default Divider;
