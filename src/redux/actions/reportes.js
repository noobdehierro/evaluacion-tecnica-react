import axios from "axios";
import { types } from "../types";

export const getReportes = (pagina) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=10&page=${pagina}`
      )
      .then((res) => {
        dispatch(gettedReportes(res.data.results));
        dispatch(gettedTotal(res.data.pagination.total));
      })
      .catch((err) => console.log(err));
  };
};

const gettedReportes = (reportes) => ({
  type: types.GET_REPORTES,
  payload: reportes,
});

const gettedTotal = (total) => ({
  type: types.GET_TOTAL_REPORTES,
  payload: total,
});

export const getReport = (_id) => {
  return (dispatch) => {
    axios
      .get(`https://api.datos.gob.mx/v1/condiciones-atmosfericas?_id=${_id}`)
      .then((res) => dispatch(getterReport(res.data.results)))
      .catch((err) => console.log(err));
  };
};

const getterReport = (report) => ({
  type: types.GET_REPORT,
  payload: report,
});


export const removeReport =()=>({
    type:types.REMOVE_REPORT
})