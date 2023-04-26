import React, {useEffect, useState} from 'react';
import './App.css';
import Counter2 from "./counter/Counter2";
import Counter from "./counter/Counter";
import {SetterValue} from "./counter/Setter/SetterValue";
import Input from "./counter/InputCount";
import Button from "./counter/Button/ButtonCount";
import ButtonCount from "./counter/Button/ButtonCount";
import InputCount from "./counter/InputCount";
import {Container, Grid, Paper} from "@mui/material";

function App() {
    const [numbers, setNumbers] = useState<number>(1)

    const [upLimit, setUplimit] = useState<number>(2)
    const [downlimit, setDownLimit] = useState<number>(1)

    const [message, setMessage] = useState<boolean>(false)
    const [errorInput, setErrorInput] = useState<boolean>(false)
    const incNumber = () => {
        setNumbers(numbers + 1)
    }
    const resetNumber = () => {
        setNumbers(downlimit)
    }

    useEffect(() => {
        setNumbers(downlimit)
    }, [downlimit])
    useEffect(() => {
        let newLowerLocalValue = localStorage.getItem("SetLowerValue")
        newLowerLocalValue && setNumbers(JSON.parse(newLowerLocalValue))
    }, [])
    useEffect(() => {
        let newUpperLocalValue = localStorage.getItem("SetUpperValue")
        newUpperLocalValue && setUplimit(JSON.parse(newUpperLocalValue))
    }, [])
    useEffect(() => {
        let newLowerLocalValue = localStorage.getItem("SetLowerValue")
        newLowerLocalValue && setDownLimit(JSON.parse(newLowerLocalValue))
    }, [])

    const numbersLimitMax = numbers === upLimit
    const numbersLimitMin = numbers === downlimit
    const messageInput = "enter value and press set"
    const setNewMessage = (value: boolean) => {
        setMessage(value)
        setNumbers(downlimit)
    }
    const inputValue = message ? messageInput : numbers

    const errorMessage = (value: boolean) => {
        setErrorInput(value)
    }
    return (
        <div className={"App"}>
            <Container fixed>
                <Grid container sx={{p: "50px 20px"}} spacing={6}>
                    <Grid item className={"box"} xs={4}>
                        <Paper elevation={8} sx={{p:"20px"}}  >
                            <Grid>
                                <SetterValue
                                    errorMessage={errorMessage}
                                    setNewMessage={setNewMessage}
                                    setUpLimit={setUplimit}
                                    setDownLimit={setDownLimit}
                                />
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={8} sx={{p:"20px"}}>
                            <Grid>
                                <Grid xs={6} sx={{m:"30px"}}>
                                    <InputCount
                                    error={errorInput}
                                    inputValue={inputValue}
                                    inputClassName={(numbersLimitMax) ? "inputIncMax" : "inputInc"}
                                />
                                </Grid>
                                <Grid className="twoButtons" sx={{ p:"20px"}}>

                                    <ButtonCount
                                        numbersLimit={numbersLimitMax}
                                        className="incButton"
                                        title="inc"
                                        onClickFunc={incNumber}
                                    />


                                    <ButtonCount
                                        numbersLimit={numbersLimitMin}
                                        className="resetButton"
                                        title="reset"
                                        onClickFunc={resetNumber}
                                    />

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
