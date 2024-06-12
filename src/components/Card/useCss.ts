import {getStyle} from '../../styles/styles';
import { css } from '../../helpers';
import getNames from './getNames';

const { CLASS } = getNames('not_relevant');

export interface ICssProps {
    defaultBorderColor?: string
    defaultBackgroundColor?: string
    activeHeaderBackground?: string
    stretchTitle?: boolean
    borderRadius?: string
    overrideDefaultBorderColor?: boolean
}

export default css<ICssProps>({
	[CLASS.ROOT]: {
		display: 'flex',
		flexDirection: 'column',
		boxSizing: 'border-box',
		backgroundColor:getStyle(s => s.BACKGROUND_COLOR),
		color:getStyle(s => s.TEXT_COLOR),
		boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
		border: getStyle(s => `1px solid ${s.BORDER_COLOR}`),
		borderRadius: getStyle(s => s.BORDER_RADIUS),
	},
});