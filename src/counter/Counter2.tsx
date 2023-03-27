import React, {useState} from 'react';

// type CounterType = {
//     numbers: number[]
//     incNumber: () => void
//     resetNumber: () => void
// }

const Counter2 = () => {
    const [numbers, setNumbers] = useState<Array<number>>([0])
    const incNumber = () => {
        const countArray = [...numbers]
        countArray.push(0)
        setNumbers(countArray)
    }
    const resetNumber = () => {
        setNumbers([0])
    }
    const numbersLength = numbers.length
    return (
        <div className="box">
            <input
                value={numbersLength - 1}
                className={(numbersLength === 6) ? "inputIncMax" : "inputInc"}
            ></input>
            <div className="twoButtons">
                <button
                    className="incButton"
                    onClick={incNumber}
                    disabled={numbersLength === 6}
                >inc
                </button>
                <button
                    className="resetButton"
                    onClick={resetNumber}
                    disabled={numbersLength === 1}
                >reset
                </button>
            </div>
        </div>
    );
};

export default Counter2;