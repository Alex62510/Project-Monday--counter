import React, {useEffect, useState} from 'react';
import './App.css';
import {SetterValue} from "./counter/Setter/SetterValue";
import ButtonCount from "./counter/Button/ButtonCount";
import InputCount from "./counter/InputCount";

function App() {
    const [numbers, setNumbers] = useState<number>(1)

    const [upLimit, setUpLimit] = useState<number>(2)
    const [downlimit, setDownLimit] = useState<number>(1)

    const [message, setMessage] = useState<boolean>(false)
    const [errorInput, setErrorInput] = useState<boolean>(false)
    const incNumber = () => {
        setNumbers(numbers + 1)
    }
    const resetNumber = () => {
        setNumbers(downlimit)
    }

    useEffect(() => {
        setNumbers(downlimit)
    }, [downlimit])
    useEffect(() => {
        let newLowerLocalValue = localStorage.getItem("SetLowerValue")
        newLowerLocalValue && setNumbers(JSON.parse(newLowerLocalValue))
    }, [])
    useEffect(() => {
        let newUpperLocalValue = localStorage.getItem("SetUpperValue")
        newUpperLocalValue && setUpLimit(JSON.parse(newUpperLocalValue))
    }, [])
    useEffect(() => {
        let newLowerLocalValue = localStorage.getItem("SetLowerValue")
        newLowerLocalValue && setDownLimit(JSON.parse(newLowerLocalValue))
    }, [])

    const numbersLimitMax = numbers === upLimit
    const numbersLimitMin = numbers === downlimit
    const messageInput = "press set"
    const setNewMessage = (value: boolean) => {
        setMessage(value)
        setNumbers(downlimit)
    }
    const inputValue = message ? messageInput : numbers

    const errorMessage = (value: boolean) => {
        setErrorInput(value)
    }
    return (
        <div className="App">
            <div className="BoxSetter">
                <SetterValue
                    errorMessage={errorMessage}
                    setNewMessage={setNewMessage}
                    setUpLimit={setUpLimit}
                    setDownLimit={setDownLimit}
                />
            </div>
            <div className="BoxCounter">
                <div className="InputCountArea">
                    <InputCount
                        error={errorInput}
                        inputValue={inputValue}
                        inputClassName={(numbersLimitMax) ? "inputIncMax" : "inputInc"}
                    />
                </div>
                <div className="twoButtons">
                    <ButtonCount
                        numbersLimit={numbersLimitMax}
                        className={(numbersLimitMax) ? "incButtonMax":"incButton"}
                        title="INC"
                        onClickFunc={incNumber}
                    />
                    <ButtonCount
                        numbersLimit={numbersLimitMin}
                        className={numbersLimitMin ? "resetButtonDisable":"resetButton"}
                        title="RESET"
                        onClickFunc={resetNumber}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
