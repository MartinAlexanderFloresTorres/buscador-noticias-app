import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { CATEGORIAS } from "../constants";
import useNoticias from "../hooks/useNoticias";

const Formulario = () => {
  const { categoria, handleChangeCategoria } = useNoticias();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoria"
          value={categoria}
          onChange={handleChangeCategoria}
        >
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Formulario;
