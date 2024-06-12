import React from 'react';
import {mergeClassNames} from '../../helpers';
import getNames from './getNames';
import useCss from './useCss';
import {IBaseComponentProps} from '../../types';
import ClickElement from '../ClickElement/ClickElement';
import {CollapsibleElement} from '../CollapsibleElement';

export interface ICardProps extends IBaseComponentProps {
	header?: any
	onHeaderClick?: () => void
	classNameHeader?: string
	children?: any
	classNameChildren?: string
	classNameHeaderAndChildrenWrapper?: string
	isOpen?: boolean
	active?: boolean
	collapsible?: boolean
	stretch?: boolean
	bodyHeight?: string
	defaultBorderColor?: string
	defaultBackgroundColor?: string
	activeHeaderBackground?: string
	stretchTitle?: boolean
	borderRadius?: string
	tag?: 'div' | 'li'
	overrideDefaultBorderColor?: boolean
}

function Card(props: ICardProps) {

	const {ID, CLASS} = useCss(getNames(props.id), {
		defaultBorderColor: props.defaultBorderColor,
		defaultBackgroundColor: props.defaultBackgroundColor,
		activeHeaderBackground: props.activeHeaderBackground,
		stretchTitle: props.stretchTitle,
		borderRadius: props.borderRadius,
		overrideDefaultBorderColor: props.overrideDefaultBorderColor
	});

	const isCollapsible = props.collapsible ?? false;

	if (!isCollapsible && props.isOpen === false) {
		throw new Error('Card is not collapsible but isOpen is false');
	}

	const Tag: 'div' | 'li' = props.tag ?? 'div';

	return <Tag
		id={ID.ROOT}
		className={mergeClassNames(CLASS.ROOT, props.className, {
			[CLASS.CARD_OPEN]: props.collapsible && props.isOpen,
			[CLASS.CARD_ACTIVE]: props.active ?? props.isOpen,
			[CLASS.COLLAPSIBLE]: isCollapsible,
			[CLASS.STRETCH]: props.stretch,
		})}
	>
		<div id={ID.HEADER_AND_BODY} className={mergeClassNames(CLASS.HEADER_AND_BODY, props.classNameHeaderAndChildrenWrapper)}>
			{props.header && isCollapsible ? <ClickElement
				id={ID.HEADER}
				className={mergeClassNames(CLASS.HEADER, props.classNameHeader)}
				onClick={props.onHeaderClick}
			>
				{props.header}
			</ClickElement>
				: props.header}
			{props.children && (isCollapsible ? <CollapsibleElement
				id={ID.CARD_BODY}
				className={mergeClassNames(CLASS.CARD_BODY, props.classNameChildren, {
					[CLASS.STRETCH]: props.stretch,
					[CLASS.NO_CARD_HEADER]: !props.header,
					[CLASS.REMOVE_TOP_BOTTOM_SPACING]: props.isOpen !== true,
				})}
				isOpen={props.isOpen === true}
				height={props.bodyHeight}
			>
				{props.children}
			</CollapsibleElement> : <div
				id={ID.CARD_BODY}
				className={mergeClassNames(CLASS.CARD_BODY, props.classNameChildren, {
					[CLASS.STRETCH]: props.stretch,
					[CLASS.NO_CARD_HEADER]: !props.header,
				})}
			>
				{props.children}
			</div>)}
		</div>
	</Tag>;
}

Card.getNames = getNames;

export default Card;
