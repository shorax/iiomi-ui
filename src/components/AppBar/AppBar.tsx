import React from 'react';
import { mergeClassNames } from '../../helpers';
import getNames from './getNames';
import useCss, { ICss } from './useCss';
import { IBaseComponentProps } from '../../types';

export interface IAppBarProps extends IBaseComponentProps, ICss {
    children: React.ReactNode | React.ReactNode[]
}

function AppBar(props: IAppBarProps) {

	const { ID, CLASS } = useCss(getNames(props.id), { position: props.position });
	const rootClassName = mergeClassNames(CLASS.ROOT, props.className);

	return <div id={ID.ROOT} className={rootClassName}>
		{props.children}
	</div>;
}

AppBar.getNames = getNames;

export default AppBar;
