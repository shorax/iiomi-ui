import React from 'react';
import { mergeClassNames } from '../../helpers';
import getNames from './getNames';
import useCss from './useCss';
import { IBaseComponentProps } from '../../types';

export interface IAccordionChildProps {
    isOpen: boolean;
    onToggle: () => void;
}

export interface IAccordionProps extends IBaseComponentProps {
    children: (getChildProps: (index: number) => IAccordionChildProps) => (React.ReactElement | null)[]
    additionalChild?: React.ReactElement
    defaultOpenChildIndex?: number
}

function Accordion(props: IAccordionProps) {

	const { ID, CLASS } = useCss(getNames(props.id));
	const [openChildIndex, setOpenChildIndex] = React.useState(props.defaultOpenChildIndex ?? -1);

	function onToggle(_openChildIndex: number) {
		if (openChildIndex === _openChildIndex) {
			setOpenChildIndex(-1);
		} else {
			setOpenChildIndex(_openChildIndex);
		}
	}

	return <ol
		id={ID.ROOT}
		className={mergeClassNames(
			CLASS.ROOT,
			props.className
		)}
	>
		{props.children(index => ({
			isOpen: index === openChildIndex,
			onToggle: () => onToggle(index)
		}))}
	</ol>;
}

Accordion.getNames = getNames;

export default Accordion;
