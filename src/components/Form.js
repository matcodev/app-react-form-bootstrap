import { React, useState, useEffect } from 'react';
import Forminput from './Forminput';

const Form = (props) => {

    const initialTask = { 
        id: null, 
        name: '', 
        description: '' 
    };
    const [form, setForm] = useState(initialTask);

    const handleIpuntChange = (e) => {
        //console.log(e.target.value)
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value })
    }
    useEffect(() => {
        //console.log(form)

    }, [form])

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form.name + ' ' + form.description);
        if (form.name.split(' ').join('') !== '' && form.name.split(' ').join('') !== ''){
        props.addTask(form)
        setForm(initialTask)
        e.target.reset();
        }
    }

    return (
        <>
            <form className="card" onSubmit={handleSubmit}>
                <div className="card-body p-3">
                    <h3 className="card-title">Crear Tarea</h3>
                    <hr></hr>

                    <Forminput
                        title='Responsable'
                        id='inputName'
                        value={form.name}
                        onChange={handleIpuntChange}
                        name='name'
                    />
                    <Forminput
                        title="Descripción de tarea"
                        id='inputDescription'
                        value={form.description}
                        onChange={handleIpuntChange}
                        name='description'
                    />
                    <button type="submit" className="btn btn-primary">Crear</button>
                </div>
            </form>
        </>
    )
}
export default Form;