import React from 'react';
import {TextField} from "@mui/material";

type InputType={
    inputValue: number|string
    inputClassName:string
    error:boolean
}
const InputCount = (props:InputType) => {
    return (
        <TextField
            size="small"
            variant="outlined"
            color="primary"
            focused
            error={props.error}
            helperText={props.error && "Incorrect value"}
            sx={{mt: "2px"}}
            value={props.inputValue}
            className={props.inputClassName}
        ></TextField>
    );
};

export default InputCount;