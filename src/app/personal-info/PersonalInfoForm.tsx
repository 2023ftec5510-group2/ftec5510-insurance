import React from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import PersonalInfo from "../../domain/entities/order/personal-info";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


interface Props {
    personalInfo: PersonalInfo,
    onchange: (event: {
        name: string;
        value: React.SetStateAction<string>;
    }) => void
    onChangeStartDate: (date: any) => void;
    onChangeEndDate: (date: any) => void;
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
            <DatePicker
                label="End Date"
                value={personalInfo.startDate}
                onChange={props.onChangeStartDate}
                disableFuture
            />
            <DatePicker
                label="End Date"
                value={personalInfo.endDate}
                onChange={props.onChangeEndDate}
                disableFuture
            />
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