import { css } from '../../helpers';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export default css({
	[CLASS.ROOT]: {
		display: 'block',
		fontWeight: '400',
		fontSize: '1em',
		lineHeight: '1.5',
		color: 'rgb(255, 255, 255)',
		padding: '1.5em',
		boxSizing: 'border-box'
	}
});
