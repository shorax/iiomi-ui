import { css } from '../../helpers';
import getNames from './getNames';
import {getStyle} from '../../styles/styles';

const { CLASS } = getNames('not_relevant');

export default css({
	[CLASS.ROOT]: {
		[css.modifier(CLASS.HORIZONTAL)]: {
			height: '0.1em',
			backgroundColor: getStyle(s => s.BORDER_COLOR),
			alignSelf: 'center',
			width: '90%'
		},
		[css.modifier(CLASS.VERTICAL)]: {
			width: '0.1em',
			backgroundColor: getStyle(s => s.BORDER_COLOR),
			alignSelf: 'center',
			height: '90%'
		},
	}
});
