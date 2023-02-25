import {Card, CardContent, CardMedia, StandardProps, Typography} from "@mui/material";



interface Props extends StandardProps<any, any>{
    imgSrc: string
    title: string
    desc: string
}

export default function PlanCard(props: Props) {

    return (
        <Card sx={{ maxWidth: 345, height: 330 }}>
            <CardMedia
                component="img"
                sx={{ height: 200}}
                src={props.imgSrc}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
        </Card>
    )
}