import React from 'react';
import styles from './App.module.scss';
import ContextCalculator from './Context/Context';
import MainScreen from './Components/Screen/MainScreen';
import KeyPad from './Components/KeyPad/KeyPad';
import * as math from 'mathjs';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputCalculator: '',
      result: 0,
    }
  }

  handleShowInput = (e) => {
    this.setState({
      inputCalculator: this.state.inputCalculator + e.currentTarget.innerText,
    });
  }

  handleClearInputScreen = () => {
    this.setState({
      inputCalculator: '',
      result: 0
    });
  }

  handleEvaluationOfExpression = () => {
    let resultInput = math.evaluate(this.state.inputCalculator);
    console.log(resultInput);
    this.setState({
      result: resultInput
    });
  }

  render() {

    const { inputCalculator, result } = this.state;

    return (
      
      <ContextCalculator.Provider value={{
        stateOfInput: inputCalculator,
        clearInputScreen: this.handleClearInputScreen,
        showInputOnScreen: this.handleShowInput,
        makeEvaluationOfExpression: this.handleEvaluationOfExpression,
        result: result
      }}>

        <div className={styles.calculatorWrapper}>
          <MainScreen />
          <KeyPad />
        </div>

      </ContextCalculator.Provider>
    )
  }
};

export default App;
