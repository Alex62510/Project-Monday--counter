import React, {useState} from 'react';

type CounterType = {
    numbers: number[]
    incNumber: () => void
    resetNumber: () => void
}

const Counter = (props: CounterType) => {
    const numbersLength = props.numbers.length
    return (
        <div className={"box"}>
            <input
                value={numbersLength-1}
                className={(numbersLength === 6) ? "inputIncMax" : "inputInc"}
            ></input>
            <div className={"twoButtons"}>
                <button
                    className={"incButton"}
                    onClick={props.incNumber}
                    disabled={numbersLength === 6}
                >inc
                </button>
                <button
                    className={"resetButton"}
                    onClick={props.resetNumber}
                    disabled={numbersLength === 1}
                >reset
                </button>
            </div>
        </div>
    );
};

export default Counter;