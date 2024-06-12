import React from 'react';
import { mergeClassNames } from '../../helpers';
import getNames from './getNames';
import useCss from './useCss';
import { IBaseComponentProps } from '../../types';

export interface IToolbarProps extends IBaseComponentProps {
    children: React.ReactNode | React.ReactNode[]
}

function Toolbar(props: IToolbarProps) {

	const { ID, CLASS } = useCss(getNames(props.id));
	const rootClassName = mergeClassNames(CLASS.ROOT, props.className);

	return <div id={ID.ROOT} className={rootClassName}>
		{props.children}
	</div>;
}

Toolbar.getNames = getNames;

export default Toolbar;
