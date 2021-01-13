import { TextField } from '@material-ui/core'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

interface IProps {
    readonly handleOnKeyUp: (event: KeyboardEvent<HTMLInputElement>, value: string) => void
    readonly label: string
}

export function ControlledTextField({ label, handleOnKeyUp }: IProps): JSX.Element {

    const [value, setValue] = useState('')

    function onChange(event: ChangeEvent<HTMLInputElement>): void {

        setValue(event.target.value)
    }

    function onKeyUp(event: KeyboardEvent<HTMLInputElement>): void {

        handleOnKeyUp(event, value)
    }

    return (
        <TextField
            label={label}
            fullWidth={true}
            onChange={onChange}
            onKeyUp={onKeyUp}
            value={value}
        />
    )
}
