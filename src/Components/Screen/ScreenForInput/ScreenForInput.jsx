import React, { useContext } from 'react';
import styles from './ScreenForInput.module.scss';
import ContextCalculator from '../../../Context/Context';

const ScreenForInput = () => {
    const contextForInputScreen = useContext(ContextCalculator);
    return (
        <>
            <div className={styles.inputScreenWrapper}>
                {/* Show a message on the screen if there is no input */}
                <p>{contextForInputScreen.stateOfInput.length > 0 ? contextForInputScreen.stateOfInput : "Do the math"}</p>
            </div>

        </>
    )
};
export default ScreenForInput;