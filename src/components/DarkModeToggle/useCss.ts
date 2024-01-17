import { css } from '../../helpers';
import useNames from './useNames'

const {CLASS} = useNames('not_relevant');

export default css({
    [CLASS.ROOT]: {
        fontSize: '16px',
    }
});