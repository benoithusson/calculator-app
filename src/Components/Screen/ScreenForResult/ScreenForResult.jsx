import React, { useContext } from 'react';
import styles from './ScreenForResult.module.scss';
import ContextCalculator from '../../../Context/Context';

const ScreenForResult = () => {
    const contextForResultScreen = useContext(ContextCalculator);
    return (
        <>
            {/* An other solution would be to use props.children to rend this.state.inputCalculator from App.jsx */}
            <div className={styles.resultScreenWrapper}>
                <p>{contextForResultScreen.result}</p>
            </div>
        </>
    )
};

export default ScreenForResult;