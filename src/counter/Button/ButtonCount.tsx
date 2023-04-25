import React, {useState} from 'react';
import {Button} from "@mui/material";

type Buttontype = {
    className: string
    onClickFunc: () => void
    numbersLimit: boolean
    title: string
}
const ButtonCount = (props: Buttontype) => {
    const ClickChinge = () => {
        props.onClickFunc()
    }
    return (
        <Button
            size="medium"
            color="secondary"
            variant="contained"
            className={props.className}
            onClick={ClickChinge}
            disabled={props.numbersLimit}
        >{props.title}
        </Button>
    );
};


export default ButtonCount;