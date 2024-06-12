import { css } from '../../helpers';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export default css({
	[CLASS.ROOT]: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		rowGap: '0.5em',
		[css.descendant(CLASS.LABEL)]: {
			flex: '1',
			margin: '0',
		},
	}
});
