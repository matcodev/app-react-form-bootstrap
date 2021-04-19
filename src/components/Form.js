import React from 'react';

const Form = () => {

    return (
        <form>
            <div className="card p-3">
            <div className="mb-3">
                <h3 class="card-title">Crear Tarea</h3>
                <hr></hr>
                <label htmlFor="exampleInputEmail1" className="form-label">Responsable</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="floatingTextarea2" className='pb-2'>Descripción de Tarea</label>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Describe tu tarea" id="floatingTextarea2" style={{ height: '100px' }} defaultValue={""} />
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Crear</button>
            </div>
        </form>
    )
}
export default Form