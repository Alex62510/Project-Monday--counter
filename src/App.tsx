import React, {useEffect, useState} from 'react';
import './App.css';
import Counter2 from "./counter/Counter2";
import Counter from "./counter/Counter";
import {SetterValue} from "./counter/Setter/SetterValue";
import Input from "./counter/Input";
import Button from "./counter/Button/Button";

function App() {
    const [numbers, setNumbers] = useState<number>(1)

    const [upLimit, setUplimit] = useState<number>(2)
    const [downlimit, setDownLimit] = useState<number>(1)

    const [message, setMessage] = useState<boolean>(false)
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
        let newLowerLocalValue = localStorage.getItem("SetlowerValue")
        newLowerLocalValue && setNumbers(JSON.parse(newLowerLocalValue))
    }, [])
    useEffect(() => {
        let newUpperLocalValue = localStorage.getItem("SetUpperValue")
        newUpperLocalValue && setUplimit(JSON.parse(newUpperLocalValue))
    }, [])
    useEffect(() => {
        let newLowerLocalValue = localStorage.getItem("SetlowerValue")
        newLowerLocalValue && setDownLimit(JSON.parse(newLowerLocalValue))
    }, [])

    const numbersLimitMax = numbers === upLimit
    const numbersLimitMin = numbers === downlimit
    const messageInput = "enter value and press set"
    const setNewMessage = (value: boolean) => {
        setMessage(value)
        setNumbers(downlimit)
    }
    const inputvalue = message ? messageInput : numbers

    return (
        <div className="App">
            <div className="box">
            <SetterValue
                setNewMessage={setNewMessage}
                setUplimit={setUplimit}
                setDownLimit={setDownLimit}
            />
            </div>
            <div className="box">
                <Input
                    inputvalue={inputvalue}
                    inputclassName={(numbersLimitMax) ? "inputIncMax" : "inputInc"}
                />
                <div className="twoButtons">
                    <Button
                        numbersLimit={numbersLimitMax}
                        className="incButton"
                        title={"inc"}
                        onClickFunc={incNumber}
                    />
                    <Button
                        numbersLimit={numbersLimitMin}
                        className="resetButton"
                        title={"reset"}
                        onClickFunc={resetNumber}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
