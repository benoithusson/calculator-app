import React, { useContext } from 'react';
import styles from './Button.module.scss';
import ContextCalculator from '../../../Context/Context';

const Button = (props) => {

    const contextForButton = useContext(ContextCalculator);

    return (

        <div className={styles.buttonWrapper} onClick={(e) => contextForButton.showInputOnScreen(e)}>
            {props.children}
        </div>

    )

};


export default Button;