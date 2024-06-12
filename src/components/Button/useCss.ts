import {css, cssAnimation} from '../../helpers';
import {fontStyles, getStyle} from '../../styles/styles';
import getNames from './getNames';
import {isMobileDevice} from '../../helpers/dom/domHelpers';

const {CLASS} = getNames('not_relevant');

const loadingAnimation = cssAnimation({
	name: 'loadingAnimation',
	iterationCount: 'infinite',
	duration: 5000,
	keyframes: {
		'0%': {
			transform: 'rotate(0turn)'
		},
		'10%': {
			opacity: '1'
		},
		'100%': {
			transform: 'rotate(3turn)'
		}
	}
});

const PRIMARY_HOVER = {
	background: getStyle(s => s.COLOR_PRIMARY_DARK),
};

const SECONDARY_HOVER = {
	background: getStyle(s => s.COLOR_SECONDARY_DARK),
	borderColor: getStyle(s => s.BORDER_COLOR_DARK)
};

const TERTIARY_HOVER = {
	borderColor: getStyle(s => s.BORDER_COLOR_DARK),
	color: getStyle(s => s.TEXT_COLOR_DARK)
};

const INLINE_HOVER = {
	background: getStyle(s => s.COLOR_SECONDARY_DARK),
	borderColor: getStyle(s => s.BORDER_COLOR_DARK)
};

export default css({
	...loadingAnimation.keyframes,
	[CLASS.ROOT]: {
		fontSize: '16px',
		color: getStyle(s => s.TEXT_COLOR),
		cursor: 'pointer',
		borderRadius: getStyle(s => s.BORDER_RADIUS),
		background: getStyle(s => s.BACKGROUND_COLOR),
		position: 'relative',
		textAlign: 'center',
		padding: '0.5em 1.2em',
		boxShadow: 'none',
		display: 'inline-flex',
		flexDirection: 'row',
		columnGap: '0.5em',
		justifyContent: 'center',
		boxSizing: 'border-box',
		alignItems: 'center',
		transition: '200ms',
		whiteSpace: 'nowrap',
		textDecoration: 'none',
		fontSynthesis: 'none',
		[css.ACTIVE]: {
			transform: 'scale(0.95)'
		},
		[css.modifier(CLASS.SIZE_SMALL)]: {
			borderRadius: getStyle(s => s.BORDER_RADIUS_SMALL),
			minHeight: '2.85em',
			...fontStyles.DEFAULT.DEFAULT_SMALL,
			[css.modifier(CLASS.WITH_ICON)]: {
				[css.hasNot(CLASS.WITH_TEXT)]: {
					padding: '0em',
					minWidth: '2.85em',
				}
			}
		},
		[css.modifier(CLASS.SIZE_MEDIUM)]: {
			minHeight: '2.75em',
			...fontStyles.DEFAULT.DEFAULT_REGULAR,
			[css.modifier(CLASS.WITH_ICON)]: {
				[css.hasNot(CLASS.WITH_TEXT)]: {
					padding: '0em',
					minWidth: '2.75em'
				}
			}
		},
		[css.modifier(CLASS.SIZE_LARGE)]: {
			minHeight: '2.65em',
			...fontStyles.DEFAULT.DEFAULT_LARGE,
			[css.modifier(CLASS.WITH_ICON)]: {
				[css.hasNot(CLASS.WITH_TEXT)]: {
					padding: '0em',
					minWidth: '2.65em'
				}
			}
		},
		[css.modifier(CLASS.DISABLED)]: {
			[css.hasNot(CLASS.IS_LOADING)]: {
				cursor: 'default !important',
				[css.descendant.anyDescendant]: {
					cursor: 'default !important'
				}
			}
		},
		[css.modifier(CLASS.VARIANT_PRIMARY)]: {
			background: getStyle(s => s.COLOR_PRIMARY),
			color: getStyle(s => s.TEXT_COLOR),
			border: getStyle(s => `0 solid ${s.BORDER_COLOR}`),
			transition: 'all 250ms',
			[css.hasNot(CLASS.DISABLED, CLASS.DISABLE_HOVER)]: {
				[css.HOVER]: isMobileDevice() ? {} : PRIMARY_HOVER
			},
			[css.modifier(CLASS.DISABLED)]: {
				background: getStyle(s => s.COLOR_PRIMARY_DISABLED),
				color: getStyle(s => s.COLOR_PRIMARY_TEXT_DISABLED),
			}
		},
		[css.modifier(CLASS.VARIANT_SECONDARY)]: {
			background: getStyle(s => s.COLOR_SECONDARY),
			color: getStyle(s => s.TEXT_COLOR),
			border: getStyle(s => `0 solid ${s.BORDER_COLOR}`),
			[css.hasNot(CLASS.DISABLED, CLASS.DISABLE_HOVER)]: {
				[css.HOVER]: isMobileDevice() ? {} : SECONDARY_HOVER
			},
			[css.modifier(CLASS.DISABLED)]: {
				background: getStyle(s => s.COLOR_SECONDARY_DISABLED),
				color: getStyle(s => s.TEXT_COLOR_DISABLED)
			}
		},
		[css.modifier(CLASS.VARIANT_TERTIARY)]: {
			background: 'transparent',
			color: getStyle(s => s.TEXT_COLOR),
			border: getStyle(s => `1px solid ${s.BORDER_COLOR}`),
			[css.hasNot(CLASS.DISABLED, CLASS.DISABLE_HOVER)]: {
				[css.HOVER]: isMobileDevice() ? {} : TERTIARY_HOVER
			},
			[css.modifier(CLASS.DISABLED)]: {
				background: 'transparent',
				borderColor: getStyle(s => s.COLOR_TERTIARY_DISABLED),
				color: getStyle(s => s.COLOR_TERTIARY_DISABLED),
				pointerEvents: 'none'
			}
		},
		[css.modifier(CLASS.VARIANT_INLINE)]: {
			background: 'transparent',
			color: getStyle(s => s.TEXT_COLOR),
			border: 'transparent',
			[css.hasNot(CLASS.DISABLED, CLASS.DISABLE_HOVER)]: {
				[css.HOVER]: isMobileDevice() ? {} : INLINE_HOVER
			},
			[css.modifier(CLASS.DISABLED)]: {
				background: 'transparent',
				borderColor: 'transparent',
				color: getStyle(s => s.COLOR_TERTIARY_DISABLED),
			}
		},
		[css.modifier(CLASS.IS_LOADING)]: {
			[css.AFTER]: {
				content: '""',
				position: 'absolute',
				width: '1.5em',
				height: '1.5em',
				top: '0',
				left: '0',
				right: '0',
				bottom: '0',
				margin: 'auto',
				border: '4px solid transparent',
				borderTopColor: '#fff',
				borderRadius: '50%',
				opacity: '0',
				...loadingAnimation.props
			}
		},
		[css.descendant(CLASS.ICON)]: {
			height: '100%',
			width: '2em',
			fontSize: 'inherit !important',
			color: 'inherit',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			[css.child.svg]: {
				height: '100%',
				width: '100%'
			}
		},
		[css.descendant(CLASS.LABEL)]: {
			fontSize: 'inherit !important',
			color: 'inherit',
			position: 'relative',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		[css.descendant.anyDescendant]: {
			cursor: 'pointer',
		},
	}
});