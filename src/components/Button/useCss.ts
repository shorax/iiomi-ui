import { css } from '../../helpers';
import { getStyle } from '../../styles/styles';
import useNames from './useNames'

const {CLASS} = useNames('not_relevant');

export default css({
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
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
    }
});