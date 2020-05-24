import React from 'react';
import styles from './KeyPad.module.scss';
import Button from './Button/Button';
import ButtonClearInput from '../../Components/KeyPad/Button/ButtonClearInput';
import EqualButton from '../../Components/KeyPad/Button/EqualButton';

const KeyPad = () => {

    return (

        <div>

            <div className={styles.keypadWrapper}>

                <div className={styles.rowForPad}>
                    <Button>/</Button>
                </div>

                <div className={styles.rowForPad}>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>*</Button>
                </div>

                <div className={styles.rowForPad}>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>-</Button>
                </div>

                <div className={styles.rowForPad}>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>+</Button>
                </div>

                <div className={styles.rowForPad}>
                    <Button>0</Button>
                    <Button>.</Button> {/* , : in french / . : in english */}
                    <EqualButton>=</EqualButton>
                    <ButtonClearInput>C</ButtonClearInput>
                </div>

            </div>

        </div>
    )
}

export default KeyPad;