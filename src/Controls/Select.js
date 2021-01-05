import { MenuItem, Select as MuiSelect} from '@material-ui/core';
import React from 'react'

export default function Select(props) {

    const { name, label, value, onChange, options } = props;

    return (
        <MuiSelect
            name={name}
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
        >
            {
                options.map(option => (
                    <MenuItem key={option.id}>{option.title}</MenuItem>
                ))
            }
        </MuiSelect>
    )
}
