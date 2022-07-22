export const formatearFecha = (fecha) => {
  const _fecha = new Date(fecha);
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return _fecha.toLocaleString(_fecha, opciones);
};
