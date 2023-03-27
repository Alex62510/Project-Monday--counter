import React, {useState} from 'react';
import Button from "./Button/Button";
import Input from "./Input";

const Counter = () => {
    const [numbers, setNumbers] = useState<number>(0)
    const incNumber = () => {
        setNumbers(numbers + 1)
    }
    const resetNumber = () => {
        setNumbers(0)
    }

    const numbersLimitMax = numbers === 5
    const numbersLimitMin = numbers === 0

    return (
        <div className="box">
            <Input inputvalue={numbers} inputclassName={(numbersLimitMax) ? "inputIncMax" : "inputInc"}  />
            <div className="twoButtons">
                <Button numbersLimit={numbersLimitMax} className={"incButton"} title={"inc"} onClickFunc={incNumber}/>
                <Button numbersLimit={numbersLimitMin} className={"resetButton"} title={"reset"} onClickFunc={resetNumber}/>
            </div>
        </div>
    );
};


export default Counter;