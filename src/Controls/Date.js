import React from 'react'
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';

export default function MuiDate(props) {

    const { label, name, value, onChange } = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker disableToolbar
                variant="inline"
                format="MM/DD/YYYY"
                margin="normal"
                id="date-picker-inline"
                name={name}
                label={label}
                value={value}
                onChange={date => onChange(convertToDefEventPara(name, moment(date).format('MM/DD/YYYY')))}
            >
            </KeyboardDatePicker>
        </MuiPickersUtilsProvider>
    )
}
