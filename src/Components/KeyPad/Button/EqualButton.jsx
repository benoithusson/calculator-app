import React, { useContext } from 'react';
import styles from './EqualButton.module.scss';
import ContextCalculator from '../../../Context/Context';

const EqualButton = (props) => {

    const contextForButton = useContext(ContextCalculator);

    return (

        <div className={styles.equalButtonWrapper} onClick={() => contextForButton.makeEvaluationOfExpression()}>
            {props.children}
        </div>

    )

};

export default EqualButton;