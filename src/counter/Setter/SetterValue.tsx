import Input from "../Input";
import Button from "../Button/Button";
import React, {ChangeEvent, useEffect, useState} from "react";
import InputLimit from "../InputLimits/InputLimit";

export type SetterPropsType = {
    setUplimit: (value: number) => void
    setDownLimit: (value: number) => void
    setNewMessage: (value: boolean) => void

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
        let newLowerLocalValue = localStorage.getItem("SetlowerValue")
        newLowerLocalValue && setLowerInputValue(JSON.parse(newLowerLocalValue))
    }, [])
    const setToLocalStorage = () => {
        localStorage.setItem("SetUpperValue", JSON.stringify(upperInputValue))
        localStorage.setItem("SetlowerValue", JSON.stringify(lowerInputValue))
        props.setUplimit(upperInputValue)
        props.setDownLimit(lowerInputValue)
        props.setNewMessage(false)
    }
    const upperLimitChange = (e: ChangeEvent<HTMLInputElement>) => {

        setUpperInputValue(JSON.parse(e.currentTarget.value))
        if (JSON.parse(e.currentTarget.value) < 0) {
            setError(true)
        } else {
            findErrorUpper(JSON.parse(e.currentTarget.value))
        }
    }
    const lowerLimitChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLowerInputValue(JSON.parse(e.currentTarget.value))
        if (JSON.parse(e.currentTarget.value) < 0) {
            setError(true)
        } else {
            findErrorLower(JSON.parse(e.currentTarget.value))
        }
    }
    const findErrorUpper = (value: number) => {
        if (lowerInputValue >= value) {
            setError(true)
        } else {
            setError(false)
        }
    }
    const findErrorLower = (value: number) => {
        if (value >= upperInputValue) {
            setError(true)
        } else setError(false)
    }

    return (
        <div>
            <InputLimit InputValue={upperInputValue} limitChange={upperLimitChange} setNewMessage={props.setNewMessage}/>
            <InputLimit InputValue={lowerInputValue} limitChange={lowerLimitChange} setNewMessage={props.setNewMessage}/>
            <div>
                <Button className={"SetButton"} onClickFunc={setToLocalStorage} numbersLimit={error} title={"SET"}/>
            </div>
        </div>
    )
}