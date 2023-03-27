import React from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import PersonalInfo from "../../domain/entities/order/personal-info";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from '@date-io/dayjs';


interface Props {
    personalInfo: PersonalInfo,
    onchange: (event: {
        name: string;
        value: React.SetStateAction<string>;
    }) => void
    onChangeStartDate: (date: Date | null) => void;
    onChangeEndDate: (date: Date | null) => void;
}

function PersonalInfoForm(props: Props) {
    const {personalInfo} = props;

    return (
        <Box
            component="form"
            // onSubmit={handleSubmit}
            style={{display: 'flex', flexDirection: 'column'}}
            noValidate
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            autoComplete="nope"
        >
            <Typography variant="h5">
                Provide personal information
            </Typography>
            <Box mt={1}/>
            <TextField
                label="First Name"
                value={personalInfo.firstName}
                onChange={(event) => {
                    props.onchange({
                        name: "firstName",
                        value: event.target.value
                    })}
                }
                required
                // variant="standard"
                autoComplete="nope"
            />
            <TextField
                label="Last Name"
                value={personalInfo.lastName}
                onChange={(event) => {
                    props.onchange({
                        name: "lastName",
                        value: event.target.value
                    })}
                }
                required
                // variant="standard"
                autoComplete="nope"
            />
            <TextField
                label="Email"
                value={personalInfo.email}
                onChange={(event) => {
                    props.onchange({
                        name: "email",
                        value: event.target.value
                    })}
                }
                // type="email"
                required
                // variant="standard"
                autoComplete="nope"
            />
            <TextField
                label="Phone"
                value={personalInfo.phone}
                onChange={(event) => {
                    props.onchange({
                        name: "phone",
                        value: event.target.value
                    })}
                }
                required
                autoComplete="nope"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Travel start day"
                    value={personalInfo.startDate}
                    onChange={(event) => {
                        props.onChangeStartDate(event)
                    }}
                />
                <DatePicker
                    label="Travel end day"
                    value={personalInfo.endDate}
                    onChange={(event) => {
                        props.onChangeEndDate(event)
                    }}
                />
            </LocalizationProvider>
            <TextField
                label="Destination"
                value={personalInfo.destination}
                onChange={(event) => {
                    props.onchange({
                        name: "destination",
                        value: event.target.value
                    })}
                }
                required
                autoComplete="nope"
            />
        </Box>
    );
}

export default PersonalInfoForm;