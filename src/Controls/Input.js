import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function Input(props) {

    const { name, label, value, onChange } = props;

    return (
        <TextField
            variant="outlined"
            name={name}
            label={label}
            value={value}
            onChange={onChange}
        >
        </TextField>
    )
}
