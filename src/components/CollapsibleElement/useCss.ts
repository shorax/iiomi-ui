import { css } from '../../helpers';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export interface ICss {
	minHeight?: string
	height?: string
}

export default css<ICss>({
	[CLASS.ROOT]: {
		position: 'relative',
		transition: 'grid-template-rows 500ms, height 500ms',
		display: props => props.height ? '' : 'grid',
		gridTemplateRows: props => props.height ? '' : '0fr',
		[css.modifier(CLASS.OPEN)]: {
			gridTemplateRows: props => props.height ? '' : '1fr',
			[css.descendant(CLASS.CHILDREN_WRAPPER)]: {
				minHeight: props => props.minHeight ?? '',
				height: props => props.height ?? '',
			},
		},
		[css.child(CLASS.CHILDREN_WRAPPER)]: {
			overflow: 'hidden',
			transition: 'height 500ms',
			height: props => props.height ? '0px' : '',
		},
	}
});
