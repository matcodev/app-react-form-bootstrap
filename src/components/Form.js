import {React, useState, useEffect} from 'react';
import Forminput from './Forminput';

const Form = () => {

    const [form, setForm] = useState({
        name: "",
        description: ""
    });

    const handleIpuntChange = (e) =>{
        //console.log(e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
       //console.log(form)
    }, [form])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.name + ' ' + form.description);
        e.target.reset();
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
                onChange= {handleIpuntChange}
                name='name'
            />
            <Forminput 
                title="Descripción de tarea"
                id='inputDescription'
                value={form.description}
                onChange= {handleIpuntChange}
                name= 'description'
            />
            <button type="submit" className="btn btn-primary">Crear</button>
            </div>
        </form>
        </>
    )
}
export default Form