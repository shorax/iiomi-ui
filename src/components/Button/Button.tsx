import React from 'react';
import {mergeClassNames} from '../../helpers';
import getNames from './getNames';
import useCss from './useCss';
import {IBaseActionComponentProps, IBaseComponentProps} from '../../types';
import {getButtonNames} from './index';

export type IButtonChild = React.ReactNode;
export type IButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'inline';
export type IButtonSize = 'small' | 'medium' | 'large' | 'custom';

export interface IButtonProps extends IBaseComponentProps,
	Pick<IBaseActionComponentProps, 'title' | 'autoFocus' | 'disabled' | 'readonly' | 'disableHover' | 'isHover' | 'tabIndex' | 'role'> {
	onClick?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
	onBlur?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
	onTouchStart?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
	children?: IButtonChild | IButtonChild[];
	icon?: React.ReactElement;
	variant?: IButtonVariant;
	size?: IButtonSize;
	isLoading?: boolean;
	selected?: boolean;
	name?: string;
}

function Button(props: IButtonProps) {

	const {ID, CLASS} = useCss(getNames(props.id));

	if(props.children == null && props.icon == null) {
		return <>Button variant is not supported.</>;
	}

	const Tag = props.readonly ? 'div' : 'button';
	const isDisabled = props.disabled || props.isLoading;

	const className = mergeClassNames(
		CLASS.ROOT,
		props.className,
		{
			[CLASS.IS_LOADING]: props.isLoading,
			[CLASS.WITH_TEXT]: props.children != null,
			[CLASS.WITH_ICON]: props.icon != null,
			[CLASS.VARIANT_PRIMARY]: props.variant === 'primary',
			[CLASS.VARIANT_SECONDARY]: props.variant === 'secondary',
			[CLASS.VARIANT_TERTIARY]: props.variant === 'tertiary' || props.variant == null,
			[CLASS.VARIANT_INLINE]: props.variant === 'inline',
			[CLASS.DISABLED]: isDisabled,
			[CLASS.DISABLE_HOVER]: props.disableHover,
			[CLASS.SIZE_SMALL]: props.size === 'small',
			[CLASS.SIZE_MEDIUM]: props.size === 'medium' || props.size == null,
			[CLASS.SIZE_LARGE]: props.size === 'large',
		}
	);
	return <Tag
		id={ID.ROOT}
		style={props.style}
		className={className}
		type={props.readonly ? undefined : 'button'}
		onClick={props.readonly || isDisabled ? undefined : (e: any) => (!areButtonsLoading() && props.onClick && props.onClick(e))}
		onTouchStart={props.readonly || isDisabled ? undefined : (e: any) => (!areButtonsLoading() && props.onTouchStart && props.onTouchStart(e))}
		title={props.title ?? (typeof props.children === 'string' ? props.children : undefined)}
		disabled={isDisabled}
		autoFocus={props.autoFocus}
		ref={props.componentReference}
		tabIndex={props.readonly ? -1 : props.tabIndex}
		role={props.role}
	>
		{props.icon == null ? undefined : <div id={ID.ICON} className={CLASS.ICON}>{props.icon}</div>}
		{isNumberOrString(props.children) ? <div id={ID.LABEL} className={CLASS.LABEL}>{props.children}</div> : props.children}
	</Tag>;
}

export function areButtonsLoading() {
	return document.getElementsByClassName(getButtonNames('_not_relevant').CLASS.IS_LOADING).length > 0;
}

function isNumberOrString(value:any){
	return ['string', 'number'].includes(typeof value);
}

Button.getNames = getNames;

export default Button;
