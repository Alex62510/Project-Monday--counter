import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

export type InputLimitsPropsType = {
    InputValue: number
    limitChange: (e: ChangeEvent<HTMLInputElement>) => void
    setNewMessage: (value: boolean) => void
    error: boolean
}

const InputLimit = (props: InputLimitsPropsType) => {
    return (
        <div>
            <div>
                <TextField
                    error={props.error}
                    helperText={props.error && "Incorrect value"}
                    value={props.InputValue}
                    size="small"
                    variant="outlined"
                    color="primary"
                    focused
                    sx={{mt: "2px"}}
                    type="number"
                    maxRows={20}
                    minRows={-2}
                    onChange={props.limitChange}
                    onFocus={() => props.setNewMessage(true)}
                />
            </div>
        </div>
    );
};

export default InputLimit;