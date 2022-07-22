import { useState, useEffect, createContext } from "react";
import axios from "axios";
const NoticiasContext = createContext();

function NoticiasProvider({ children }) {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [alerta, setAlerta] = useState("");
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarAPI = async () => {
      try {
        setAlerta("")
        const KEY = import.meta.env.VITE_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?category=${categoria}&apiKey=${KEY}&pageSize=12&page=${pagina}&language=es`;
        const { data } = await axios(url);
        setNoticias(data.articles);
        setTotalNoticias(data.totalResults);
      } catch (error) {
        console.error(error);
        setAlerta("Solicitudes máximas alcanzadas por hoy 😥, Vuelve en las próximas 24 horas.")
      }
    };
    consultarAPI();
  }, [categoria, pagina]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
    setPagina(1);
  };

  const handleChangePagina = (e, valor) => {
    setPagina(valor);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina,
        alerta
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
}

export { NoticiasProvider };

export default NoticiasContext;
