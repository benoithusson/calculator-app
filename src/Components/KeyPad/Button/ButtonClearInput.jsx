import React, { useContext } from 'react';
import styles from './Button.module.scss';
import ContextCalculator from '../../../Context/Context';

const ButtonToClearInputCalculator = (props) => {
    const contextForButtonToClear = useContext(ContextCalculator);
    return (
        <div className={styles.buttonWrapper} onClick={() => contextForButtonToClear.clearInputScreen()}>
            {props.children}
        </div>
    )
};

export default ButtonToClearInputCalculator;