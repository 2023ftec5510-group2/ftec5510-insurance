import {Box, Card, StandardProps} from "@mui/material";


interface Props extends StandardProps<any, any> {
    method: string
}

export default function Payment(props: Props) {

        return (
            <Card>
                <Box textAlign={"center"}>
                    <h1>{ props.method }</h1>
                </Box>
            </Card>
        )
}