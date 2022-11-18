import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export interface MyCardProps {
  header: string;
  description: string[];
  imageSrc?: string;
}

export function MyCard(props: MyCardProps) {
  return (
    <Card sx={{ width: "75%", boxShadow: 3 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        width={"auto"} //{'matchParent'}
        height="300"
        image="./programmer.png"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{marginBottom: '16px'}}>
          {props.header}
        </Typography>
        {props.description.map((line) => {
          return <Typography paragraph>{line}</Typography>;
        })}
      </CardContent>
    </Card>
  );
}
