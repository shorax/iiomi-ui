import { css } from '../../helpers';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export default css({
	[CLASS.ROOT]: {
		[css.modifier(CLASS.ACTIVE)]: {
			cursor: 'pointer',
		},
	},
});