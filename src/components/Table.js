import React from "react";

const Table = () => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col" className="w-10">
            ID
          </th>
          <th scope="col" className="w-30">
            Responsable
          </th>
          <th scope="col" className="w-50">
            Descripción
          </th>
          <th scope="col" className="w-10 text-center">
            Opciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>José</td>
          <td>Cocinar</td>
          <td>
            <div className="container text-center">
              <button
                type="button"
                className="btn"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Editar"
              >
                <i className="far fa-edit"></i>
              </button>
              <button type="button"
                className="btn"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Eliminar"
              >
                <i className="fas fa-times text-danger"></i>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mario</td>
          <td>Ordenar</td>
          <td>
            <div className="container text-center">
              <button type="button"
                className="btn"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Editar"
              >
                <i className="far fa-edit"></i>
              </button>
              <button type="button"
                className="btn"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Eliminar"
              >
                <i className="fas fa-times text-danger"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
