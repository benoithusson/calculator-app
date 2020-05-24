import React from 'react';
import styles from './MainScreen.module.scss';
import ScreenForInput from '../Screen/ScreenForInput/ScreenForInput';
import ScreenForResult from '../Screen/ScreenForResult/ScreenForResult';

const MainScreen = () => {
    return (
        <div className={styles.inputAndResultScreenWrapper}>
            <ScreenForResult />
            <br/>
            <ScreenForInput />
        </div>
    )
};

export default MainScreen;