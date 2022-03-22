import { types } from "../types";

const initialState = {
  reportes: [],
  pagina: 1,
  total:0,
  report:[]
};

export const reportes = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REPORTES:
      return {
        ...state,
        reportes: action.payload,
      };
    case types.GET_TOTAL_REPORTES:
      return {
        ...state,
        total: action.payload,
      };
    case types.GET_REPORT:
        return{
            ...state,
            report:action.payload
        }
    case types.REMOVE_REPORT:
        return{
            ...state,
            report:[]
        }

    default:
      return state;
  }
};
