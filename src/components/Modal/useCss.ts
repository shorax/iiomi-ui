import { getStyle } from '../../styles/styles';
import { css } from '../../helpers';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export default css({
	[CLASS.ROOT]: {
		zIndex: '99999',
		position: 'fixed',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(20, 20, 20, 0.5)',
		display: 'grid',
		justifyContent: 'center',
		alignItems: 'center',
		[css.descendant(CLASS.MODAL_WRAPPER)]: {
			boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
			borderRadius: getStyle(s => s.BORDER_RADIUS),
			backgroundColor: getStyle(s => s.BACKGROUND_COLOR),
			margin: '1em',
			[css.descendant(CLASS.HEADER)]: {
				padding: '0 0.5em',
				height: '3.5em',
				display: 'flex',
				flexWrap: 'nowrap',
				alignItems: 'center',
				backgroundColor: getStyle(s => s.BACKGROUND_COLOR),
				borderTopLeftRadius: getStyle(s => s.BORDER_RADIUS),
				borderTopRightRadius: getStyle(s => s.BORDER_RADIUS),
				[css.descendant(CLASS.TITLE)]: {
					flex: '1',
					paddingLeft: '0.5em',
				},
				[css.descendant(CLASS.CLOSE)]: {
					width: '1.4em',
				},
			},
			[css.descendant(CLASS.CONTENT)]: {
				padding: '1em',
			},
			[css.descendant(CLASS.FOOTER)]: {
				height: '2.75em',
				padding: '1em',
				display: 'flex',
				columnGap: '1em',
				backgroundColor: getStyle(s => s.BACKGROUND_COLOR),
				borderBottomLeftRadius: getStyle(s => s.BORDER_RADIUS),
				borderBottomRightRadius: getStyle(s => s.BORDER_RADIUS),
				[css.descendant(CLASS.FOOTER_BUTTON)]: {
					flex: '1',
				},
			},
		},
	}
});
