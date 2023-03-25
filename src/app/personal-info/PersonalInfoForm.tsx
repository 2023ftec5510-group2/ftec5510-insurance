import React from 'react';
import {Box, TextField, Typography} from '@mui/material';
import PersonalInfo from "../../domain/entities/order/personal-info";


interface Props {
    personalInfo: PersonalInfo,
    onchange: (event: {
        name: string;
        value: React.SetStateAction<string>;
    }) => void
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
                // onChange={(event: { target: { value: React.SetStateAction<string>; }; }) =>
                //     setPersonalInfo((prevState) => ({
                //         ...prevState,
                //         personalInfo: {
                //             ...prevState,
                //             firstName: event.target.value
                //         }
                //     }))
                // }
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
                // type="tel"
                required
                // variant="standard"
                autoComplete="nope"
            />
        </Box>
    );
}

export default PersonalInfoForm;