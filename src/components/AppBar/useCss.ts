import { css } from '../../helpers';
import { getStyles } from '../../styles/styles';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export interface ICss {
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative',
}

export default css<ICss>({
	[CLASS.ROOT]: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: '4em',
		width: '100%',
		boxSizing: 'border-box',
		padding: '0 1.5em',
		position: props => props.position || 'static',
		backgroundColor: getStyles().BACKGROUND_COLOR,
		color: getStyles().TEXT_COLOR,
		transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
		backgroundImage: 'linear-gradient(rgba(23, 23, 23, 0.2), rgba(255, 255, 255, 0.09))',
	}
});
