/* eslint-disable no-mixed-operators */
import style from "./Festivity.module.css";

// Feriados inamovibles:
// 1, 21 de Enero, 27 de Febrero
// 16 de Agosto, 24 de Septiembre
// 25 de Diciembre

// Feriados movibles:
// 6 y 26 de Enero, 1 de Mayo,
// 6 de Noviembre

// Feriados que cambian todos los años:
// Viernes santo Marzo/Abril
// Corpus Christi Mayo/Junio

const yearLast = {
  Enero: {
    1: "Año nuevo",
    9: "Día de reyes",
    21: "Día de la Altagracia",
    30: "Día de Duarte",
  }, // el día 26 de Enero se mueve para el 29
  Febrero: { 27: "Día de la Independencia" },
  Marzo: {},
  Abril: { 7: "Viernes Santo" }, // Viernes Santo
  Mayo: { 1: "Día del trabajo" }, // Día del trabajo
  Junio: { 8: "Corpus Christi" }, // Corpus Christi
  Julio: {},
  Agosto: { 16: "Día de la Restauración" },
  Septiembre: { 24: "Día de las Mercedes" },
  Octubre: {},
  Noviembre: { 6: "Día de la Constitución" }, // Día de la Constitución
  Diciembre: { 25: "Día de Navidad" },
};

const yearCurrent = {
  Enero: {
    1: "Año nuevo",
    6: "Día de reyes",
    21: "Día de la Altagracia",
    29: "Día de Duarte",
  },
  Febrero: { 27: "Día de la Independencia" },
  Marzo: { 29: "Viernes Santo" },
  Abril: { 29: "Día del trabajo" },
  Mayo: { 30: "Corpus Christi" },
  Junio: {},
  Julio: {},
  Agosto: { 16: "Día de la Restauración" },
  Septiembre: { 24: "Día de las Mercedes" },
  Octubre: {},
  Noviembre: { 4: "Día de la Constitución" },
  Diciembre: { 25: "Día de Navidad" },
};

const yearNext = {
  Enero: {
    1: "Año nuevo",
    6: "Día de reyes",
    21: "Día de la Altagracia",
    26: "Día de Duarte",
  },
  Febrero: { 27: "Día de la Independencia" },
  Marzo: {},
  Abril: { 18: "Viernes Santo" },
  Mayo: { 5: "Día del trabajo" },
  Junio: { 19: "Corpus Christi" },
  Julio: {},
  Agosto: { 16: "Día de la Restauración" },
  Septiembre: { 24: "Día de las Mercedes" },
  Octubre: {},
  Noviembre: { 10: "Día de la Constitución" },
  Diciembre: { 25: "Día de Navidad" },
};

// Fechas con actividades teocrticas
const activityLast = {
  Enero: {},
  Febrero: {},
  Marzo: { 11: "Representante de la central mundial" },
  Abril: {
    1: "Discurso Especial",
    4: "Conmemoración",
    22: "Asamblea de Circuito",
  },
  Mayo: {
    23: "Visita del Sup.",
    24: "Visita del Sup.",
    25: "Visita del Sup.",
    26: "Visita del Sup.",
    27: "Visita del Sup.",
    28: "Visita del Sup.",
  },
  Junio: {},
  Julio: {},
  Agosto: {},
  Septiembre: {
    1: "Asamblea Regional",
    2: "Asamblea Regional",
    3: "Asamblea Regional",
  },
  Octubre: { 31: "Visita del Sup." },
  Noviembre: {
    1: "Visita del Sup.",
    2: "Visita del Sup.",
    3: "Visita del Sup.",
    4: "Visita del Sup.",
    5: "Visita del Sup.",
    12: "Asamblea de Circuito",
  },
  Diciembre: {},
};

const activityCurrent = {
  Enero: {},
  Febrero: {},
  Marzo: {
    9: "Discurso Especial",
    16: "Asamblea de Circuito",
    24: "Conmemoración",
  },
  Abril: {},
  Mayo: {},
  Junio: {},
  Julio: {},
  Agosto: {},
  Septiembre: {},
  Octubre: {},
  Noviembre: {},
  Diciembre: {},
};

const activityNext = {
  Enero: {},
  Febrero: {},
  Marzo: {},
  Abril: { 5: "Discurso Especial", 12: "Conmemoración" },
  Mayo: {},
  Junio: {},
  Julio: {},
  Agosto: {},
  Septiembre: {},
  Octubre: {},
  Noviembre: {},
  Diciembre: {},
};

function Festivity(props) {
  const backgroundColorToday =
    props.num === props.currentDay &&
    props.currentMonth === props.stateMonth &&
    props.currentYear === props.stateYear
      ? "rgb(145, 190, 212)"
      : (activityLast[props.stateMonth][props.num] &&
          props.stateYear === props.currentYear) ||
        (activityCurrent[props.stateMonth][props.num] &&
          props.stateYear === props.currentYear + 1) ||
        (activityNext[props.stateMonth][props.num] &&
          props.stateYear === props.currentYear + 2)
      ? "rgb(216, 80, 216)"
      : (yearLast[props.stateMonth][props.num] &&
          props.stateYear === props.currentYear) ||
        (yearCurrent[props.stateMonth][props.num] &&
          props.stateYear === props.currentYear + 1) ||
        (yearNext[props.stateMonth][props.num] &&
          props.stateYear === props.currentYear + 2)
      ? "rgb(235, 54, 54)"
      : "#d9e8f5";

  const titleToday =
    props.stateYear === props.currentYear
      ? activityLast[props.stateMonth][props.num] ||
        yearLast[props.stateMonth][props.num]
      : props.stateYear === props.currentYear + 1
      ? activityCurrent[props.stateMonth][props.num] ||
        yearCurrent[props.stateMonth][props.num]
      : props.stateYear === props.currentYear + 2
      ? activityNext[props.stateMonth][props.num] ||
        yearNext[props.stateMonth][props.num]
      : null;

  const titleFestivity =
    props.stateYear === props.currentYear
      ? yearLast[props.stateMonth][props.num]
      : props.stateYear === props.currentYear + 1
      ? yearCurrent[props.stateMonth][props.num]
      : props.stateYear === props.currentYear + 2
      ? yearNext[props.stateMonth][props.num]
      : null;

  const titleActivity =
    props.stateYear === props.currentYear
      ? activityLast[props.stateMonth][props.num]
      : props.stateYear === props.currentYear + 1
      ? activityCurrent[props.stateMonth][props.num]
      : props.stateYear === props.currentYear + 2
      ? activityNext[props.stateMonth][props.num]
      : null;

  return (
    <>
      <h2
        title={titleToday}
        aria-label={`Día ${props.num}`}
        className={style.dayNum}
        style={{ backgroundColor: backgroundColorToday }}
      >
        {props.num}
      </h2>
      <h6 className={style.titleFestivity}>{titleFestivity}</h6>
      <h6 className={style.titleActivity}>{titleActivity}</h6>
    </>
  );
}

export default Festivity;

// Nota: Todo esto funciona muy bien, pero cuando haya un cambio de año
// habrá que hacer un ajuste manual para que siga funcionando,
// ya sea desde la misma base de datos de Firebase o directamente en el código.
