import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { formatearFecha } from "../helpers";

function Noticia({ noticia }) {
  const { description, publishedAt, source, title, url, urlToImage } = noticia;

  return (
    <Grid item md={6} lg={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          component={"img"}
          alt={`imagen de la noticia ${title}`}
          image={urlToImage}
          height={"200px"}
        />
        <CardContent>
          <Typography variant="body1" color={"error"}>
            {source.name}
          </Typography>
          <Typography variant="body1" color={"primary"}>
            {formatearFecha(publishedAt)}
          </Typography>
          <Typography variant="h5" fontSize={18} marginY={1} component={"div"}>
            {title}
          </Typography>
          <Typography variant="body2" fontSize={14} component={"p"}>
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width="100%"
            textAlign="center"
            sx={{ textDecoration: "none" }}
            marginY={1}
          >
            Leer noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Noticia;
