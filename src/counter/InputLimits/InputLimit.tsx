import React, {ChangeEvent} from 'react';

export type InputLimitsPropsType= {
    InputValue: number
    limitChange: (e: ChangeEvent<HTMLInputElement>) => void
    setNewMessage:(value: boolean)=>void
}

const InputLimit = (props:InputLimitsPropsType) => {
    return (
        <div>
            <div>
                <input
                    value={props.InputValue}
                    type="number"
                    max={20}
                    min={-2}
                    onChange={props.limitChange}
                    onFocus={() => props.setNewMessage(true)}
                />
            </div>
        </div>
    );
};

export default InputLimit;