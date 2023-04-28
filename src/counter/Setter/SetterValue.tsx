import React, {ChangeEvent, useEffect, useState} from "react";
import InputLimit from "../InputLimits/InputLimit";
import ButtonCount from "../Button/ButtonCount";

export type SetterPropsType = {
    setUpLimit: (value: number) => void
    setDownLimit: (value: number) => void
    setNewMessage: (value: boolean) => void
    errorMessage: (value: boolean) => void

}

export const SetterValue = (props: SetterPropsType) => {
    const [upperInputValue, setUpperInputValue] = useState<number>(2)
    const [lowerInputValue, setLowerInputValue] = useState<number>(1)

    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        let newUpperLocalValue = localStorage.getItem("SetUpperValue")
        newUpperLocalValue && setUpperInputValue(JSON.parse(newUpperLocalValue))
    }, [])
    useEffect(() => {
        let newLowerLocalValue = localStorage.getItem("SetLowerValue")
        newLowerLocalValue && setLowerInputValue(JSON.parse(newLowerLocalValue))
    }, [])
    const setToLocalStorage = () => {
        localStorage.setItem("SetUpperValue", JSON.stringify(upperInputValue))
        localStorage.setItem("SetLowerValue", JSON.stringify(lowerInputValue))
        props.setUpLimit(upperInputValue)
        props.setDownLimit(lowerInputValue)
        props.setNewMessage(false)
    }
    const upperLimitChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUpperInputValue(JSON.parse(e.currentTarget.value))
        if (JSON.parse(e.currentTarget.value) < 0) {
            setError(true)
            props.errorMessage(true)
        } else {
            findErrorUpper(JSON.parse(e.currentTarget.value))
        }
    }
    const lowerLimitChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLowerInputValue(JSON.parse(e.currentTarget.value))
        if (JSON.parse(e.currentTarget.value) < 0) {
            setError(true)
            props.errorMessage(true)
        } else {
            findErrorLower(JSON.parse(e.currentTarget.value))
        }
    }
    const findErrorUpper = (value: number) => {
        if (lowerInputValue > 0 && lowerInputValue < value) {
            setError(false)
            props.errorMessage(false)
        } else {
            setError(true)
            props.errorMessage(true)
        }
    }
    const findErrorLower = (value: number) => {
        if (value >= upperInputValue) {
            setError(true)
            props.errorMessage(true)
        } else setError(false)
        props.errorMessage(false)
    }
    return (
        <div>
            <div className="InputArea">
                <div className="MaxAndInput">
                    <div>MAX VALUE:</div>
                    <InputLimit
                        InputValue={upperInputValue}
                        limitChange={upperLimitChange}
                        setNewMessage={props.setNewMessage}
                        error={error}
                    />
                </div>
                <div className="MinAndInput">
                    <div>MIN VALUE:</div>
                    <InputLimit
                        InputValue={lowerInputValue}
                        limitChange={lowerLimitChange}
                        setNewMessage={props.setNewMessage}
                        error={error}
                    />
                </div>
            </div>
            <div className="setButtonArea">
                <ButtonCount
                    className={error ? "setButtonError" : "SetButton"}
                    onClickFunc={setToLocalStorage}
                    numbersLimit={error}
                    title={error ? "WRONG VALUE" : "SET"}
                />
            </div>
        </div>
    )
}