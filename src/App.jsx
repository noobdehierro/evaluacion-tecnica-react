import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReport, getReportes, removeReport } from "./redux/actions/reportes";

const App = () => {
  const dispatch = useDispatch();
  const { reportes, total, report } = useSelector((state) => state.reportes);
  const [pagina, setpagina] = useState(1);

  useEffect(() => {
    dispatch(getReportes(pagina));
  }, [dispatch, pagina]);

  const handleIdRegistro = (_id) => {
    dispatch(getReport(_id));
  };

  const handleRemoveReport = () => {
    dispatch(removeReport());
  };

  const handleAdelante = () => {
    setpagina((prev) => prev + 1);
  };

  const handleAtras = () => {
    if (pagina === 1) {
      return;
    }
    setpagina((prev) => prev - 1);
  };
  return (
    <div>
      <h2>Pagina:{pagina}</h2>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th>_Id</th>
            <th>CityId</th>
            <th>Name</th>
            <th>State</th>
            <th>ProbabilityOfPrecip</th>
            <th>RelativeHumidity</th>
            <th>LastReportTime</th>
            <th>Llueve</th>
          </tr>
        </thead>
        <tbody>
          {reportes &&
            report.length === 0 &&
            reportes.map(
              ({
                _id,
                cityid,
                name,
                state,
                probabilityofprecip,
                relativehumidity,
                lastreporttime,
              }) => {
                const llueve =
                  probabilityofprecip > 60 || relativehumidity > 50
                    ? "si"
                    : "no";

                const date = new Date(lastreporttime);

                console.log(date, lastreporttime);
                return (
                  <tr key={_id} className="table__tr">
                    <td
                      onClick={() => handleIdRegistro(_id)}
                      className="table__td"
                    >
                      {_id}
                    </td>
                    <td>{cityid}</td>
                    <td>{name}</td>
                    <td>{state}</td>
                    <td>{probabilityofprecip}</td>
                    <td>{relativehumidity}</td>
                    <td>{lastreporttime}</td>
                    <td>{llueve}</td>
                  </tr>
                );
              }
            )}
          {report &&
            report.map(
              ({
                _id,
                cityid,
                name,
                state,
                probabilityofprecip,
                relativehumidity,
                lastreporttime,
              }) => {
                const llueve =
                  probabilityofprecip > 60 || relativehumidity > 50
                    ? "si"
                    : "no";
                return (
                  <tr key={_id}>
                    <td onClick={() => handleIdRegistro(_id)}>{_id}</td>
                    <td>{cityid}</td>
                    <td>{name}</td>
                    <td>{state}</td>
                    <td>{probabilityofprecip}</td>
                    <td>{relativehumidity}</td>
                    <td>{lastreporttime}</td>
                    <td>{llueve}</td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
      {report.length === 0 ? (
        <div>
          <button onClick={handleAtras}>Atras</button>

          <button onClick={handleAdelante}>Adelante</button>
        </div>
      ) : (
        <button onClick={handleRemoveReport}>regresar</button>
      )}
      <p>
        Total De Registros =<strong>{total}</strong>
      </p>
    </div>
  );
};

export default App;
