import React, {ChangeEvent} from 'react';


export type InputLimitsPropsType = {
    InputValue: number
    limitChange: (e: ChangeEvent<HTMLInputElement>) => void
    setNewMessage: (value: boolean) => void
    error: boolean
}

const InputLimit = (props: InputLimitsPropsType) => {
    return (
        <input
            className="inputLimit"
            value={props.InputValue}
            type="number"
            max={20}
            min={-2}
            onChange={props.limitChange}
            onFocus={() => props.setNewMessage(true)}
        />
    );
};

export default InputLimit;