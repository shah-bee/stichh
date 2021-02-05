import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect, Typography } from '@material-ui/core';
import React from 'react'

export default function Select(props) {

    const { name, label, value, onChange, options, errorMessage } = props;

    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                name={name}
                label={label}
                variant="standard"
                value={value}
                required
                onChange={onChange}
                error
            >
                <MenuItem value="">{"Select"}</MenuItem>
                {
                    options.map(option => (
                        <MenuItem key={option.id} value={option.name}>{option.name}</MenuItem>
                    ))
                }
            </MuiSelect>
            <FormHelperText>
                {errorMessage &&
                    <Typography variant='subtitle1' color="error">{errorMessage}</Typography>
                }
            </FormHelperText>
        </FormControl>
    )
}
