import {Card, CardContent, CardMedia, StandardProps, Typography} from "@mui/material";
import CheckCircle from '@mui/icons-material/CheckCircle';


interface Props extends StandardProps<any, any> {
    imgSrc: string
    price: number
    title: string
    desc: string
    selected: boolean
}

export default function PlanCard(props: Props) {

    return (
        <Card
            sx={{
                height: 360,
                position: "relative",
            }}
            onClick={props.onClick}
        >
            {props.selected &&
                <CheckCircle
                    sx={{
                        position: "absolute",
                        top: "2%",
                        left: "2%",
                        width: "60px",
                        height: "60px",
                    }}
                />
            }

            <CardMedia
                component="img"
                sx={{height: 200}}
                src={props.imgSrc}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {"$" + props.price}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
        </Card>
    )
}