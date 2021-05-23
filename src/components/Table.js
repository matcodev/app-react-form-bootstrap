import React from "react";

const Table = (props) => {
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
        {
          props.task.length > 0 ?
            props.task.map((task) => (
              <tr key={task.id}>
                <th scope="row">{task.id}</th>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>
                  <div className="container text-center">
                    <button
                      type="button"
                      className="btn far fa-edit"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Editar"
                    >
                    </button>
                    <button
                      onClick={() => props.deleteTask(task.id)}
                      type="button"
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
            )) : (
              <tr className="container text-center text-danger">
                <td></td>
                <td> <h1>No tasks for now</h1></td>
                <td></td>
                <td></td>
              </tr>
            )
        }
      </tbody>
    </table>
  );
};

export default Table;
