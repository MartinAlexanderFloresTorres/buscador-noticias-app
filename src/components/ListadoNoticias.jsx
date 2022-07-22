import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ListadoNoticias() {
  const { noticias, totalNoticias, handleChangePagina, pagina, alerta } =
    useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 12);
  return (
    <>
      {alerta ? (
        <Typography
          textAlign={"center"}
          marginY={10}
          variant="h5"
          component={"h2"}
          color={"error"}
        >
          {alerta}
        </Typography>
      ) : (
        <>
          <Typography
            textAlign={"center"}
            marginY={5}
            variant="h3"
            component={"h2"}
          >
            Ultimas Noticia
          </Typography>

          <Grid container spacing={2}>
            {noticias.map(
              (noticia) =>
                noticia?.urlToImage?.indexOf("https") >= 0 && (
                  <Noticia key={noticia.url} noticia={noticia} />
                )
            )}
          </Grid>

          <Stack
            spacing={2}
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
            marginY={5}
          >
            <Pagination
              siblingCount={1}
              boundaryCount={0}
              page={pagina}
              onChange={handleChangePagina}
              count={totalPaginas}
              color="primary"
            />
          </Stack>
        </>
      )}
    </>
  );
}

export default ListadoNoticias;
