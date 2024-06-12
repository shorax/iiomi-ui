import React from 'react';
import parseStringToHtml from 'html-react-parser';
import { mergeClassNames } from '../../helpers';
import getNames from './getNames';
import useCss from './useCss';
import { IBaseComponentProps } from '../../types';

export type ITag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'label' | 'p';

export interface ILabelProps extends Pick<IBaseComponentProps, 'id' | 'className'> {
    children: React.ReactNode | string | number | React.ReactElement | React.ReactElement[] | string[] | (React.ReactElement | string)[]
    size?: 'small' | 'default' | 'large',
    bold?: boolean,
    uppercase?: boolean,
    underline?: boolean,
    tag?: ITag,
}

function Label(props: ILabelProps) {

	const { ID, CLASS } = useCss(getNames(props.id));
	const isDefaultTag = (props.tag === 'div' || props.tag == null);

	const Tag = props.tag ?? 'div';

	return <Tag
		id={ID.ROOT}
		className={mergeClassNames(CLASS.ROOT, props.className, {
			[CLASS.UPPERCASE]: props.uppercase,
			[CLASS.UNDERLINE]: props.underline,
			[CLASS.H1]: props.tag === 'h1',
			[CLASS.H2]: props.tag === 'h2',
			[CLASS.H3]: props.tag === 'h3',
			[CLASS.H4]: props.tag === 'h4',
			[CLASS.H5]: props.tag === 'h5',
			[CLASS.H6]: props.tag === 'h6',
			[CLASS.DEFAULT_SMALL]: isDefaultTag && props.size === 'small' && !props.bold,
			[CLASS.DEFAULT_SMALL_BOLD]: isDefaultTag && props.size === 'small' && props.bold,
			[CLASS.DEFAULT_REGULAR]: isDefaultTag && props.size === 'default' && !props.bold,
			[CLASS.DEFAULT_REGULAR_BOLD]: isDefaultTag && props.size === 'default' && props.bold,
			[CLASS.DEFAULT_LARGE]: isDefaultTag && props.size === 'large' && !props.bold,
			[CLASS.DEFAULT_LARGE_BOLD]: isDefaultTag && props.size === 'large' && props.bold,
			[CLASS.LABEL]: props.tag === 'label',
			[CLASS.LABEL_BOLD]: props.tag === 'label' && props.bold,
			[CLASS.LABEL_LARGE]: props.tag === 'label' && props.size === 'large' && !props.bold,
			[CLASS.LABEL_LARGE_BOLD]: props.tag === 'label' && props.size === 'large' && props.bold,
			[CLASS.LABEL_SMALL]: props.tag === 'label' && props.size === 'small' && !props.bold,
			[CLASS.P]: props.tag === 'p',
		})}
	>
		{typeof props.children === 'string' ? parseStringToHtml(props.children as string) : props.children}
	</Tag>;
}

Label.getNames = getNames;

export default Label;
