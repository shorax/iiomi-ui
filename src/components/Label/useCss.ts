import { fontStyles } from '../../styles/styles';
import { css } from '../../helpers';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export default css({
	[CLASS.ROOT]: {
		color: 'inherit',
		cursor: 'inherit',
		[css.modifier(CLASS.UNDERLINE)]: {
			textDecoration: 'underline',
		},
		[css.modifier(CLASS.UPPERCASE)]: {
			textTransform: 'uppercase',
		},
		[css.modifier(CLASS.BOLD)]: {
			fontWeight: 'bold',
		},
		[css.modifier(CLASS.H1)]: fontStyles.DEFAULT.H1,
		[css.modifier(CLASS.H2)]: fontStyles.DEFAULT.H2,
		[css.modifier(CLASS.H3)]: fontStyles.DEFAULT.H3,
		[css.modifier(CLASS.H4)]: fontStyles.DEFAULT.H4,
		[css.modifier(CLASS.H5)]: fontStyles.DEFAULT.H5,
		[css.modifier(CLASS.H6)]: fontStyles.DEFAULT.H6,
		[css.modifier(CLASS.DEFAULT_SMALL)]: fontStyles.DEFAULT.DEFAULT_SMALL,
		[css.modifier(CLASS.DEFAULT_SMALL_BOLD)]: fontStyles.DEFAULT.DEFAULT_SMALL_BOLD,
		[css.modifier(CLASS.DEFAULT_REGULAR)]: fontStyles.DEFAULT.DEFAULT_REGULAR,
		[css.modifier(CLASS.DEFAULT_REGULAR_BOLD)]: fontStyles.DEFAULT.DEFAULT_REGULAR_BOLD,
		[css.modifier(CLASS.DEFAULT_LARGE)]: fontStyles.DEFAULT.DEFAULT_LARGE,
		[css.modifier(CLASS.DEFAULT_LARGE_BOLD)]: fontStyles.DEFAULT.DEFAULT_LARGE_BOLD,
		[css.modifier(CLASS.LABEL)]: fontStyles.DEFAULT.LABEL_REGULAR,
		[css.modifier(CLASS.LABEL_BOLD)]: fontStyles.DEFAULT.LABEL_REGULAR_BOLD,
		[css.modifier(CLASS.LABEL_LARGE)]: fontStyles.DEFAULT.LABEL_LARGE,
		[css.modifier(CLASS.LABEL_LARGE_BOLD)]: fontStyles.DEFAULT.LABEL_LARGE_BOLD,
		[css.modifier(CLASS.LABEL_SMALL)]: fontStyles.DEFAULT.LABEL_SMALL,
		[css.modifier(CLASS.P)]: fontStyles.DEFAULT.PARAGRAPH_REGULAR,
	}
});