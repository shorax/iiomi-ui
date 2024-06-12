import { css } from '../../helpers';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export default css({
	[CLASS.ROOT]: {
		boxSizing: 'inherit',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		minHeight: '4em',
	}
});