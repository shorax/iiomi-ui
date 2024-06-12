import { css } from '../../helpers';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export default css({
	[CLASS.ROOT]: {
		padding: '0',
		margin: '0',
		listStyleType: 'none',
	}
});
