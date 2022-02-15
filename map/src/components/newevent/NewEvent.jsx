import React from 'react';
import useFormData from '../../hooks/useFormData';
import './NewEvent.css'

const NewEvent = (props) => {

  const {form, formData, updateFormData} = useFormData();

  const submitForm = (e) =>{
    e.preventDefault();
    console.log(formData);
    e.target.reset();
  }

  return(
    <div>
      <h1>Agregar nuevo evento</h1>
      <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
        <div className='eventForm'>
          <label className='eventForm' htmlFor='event'>
            <span>Evento: </span>    
            <input name='event' className='' type='text' placeholder='Ejemplo: derrumbe'/>
          </label>
          <label className='eventForm' htmlFor='latitude'>
            <span>Latitud: </span>
            <input name='latitude' className='' type='text'  value={props.position.latitude} onChange={(event)=>this.inputChangedHandler(event)} readOnly/>
          </label>
          <label className='eventForm' htmlFor='longitude'>
            <span>Longitud: </span>
            <input name='longitude' className='' type='text' value={props.position.longitude} onChange={(event)=>this.inputChangedHandler(event)} readOnly/>
          </label>
          <label className='eventForm' htmlFor='description'>
            <span>Descripcion: </span>    
            <input name='description' className='' type='text' placeholder='Ejemplo: derrumbe en la via'/>
          </label>
          <label className='eventForm' htmlFor='image'>
            <span>Imagen: </span>    
            <input name='image' className='' type='text' placeholder=''/>
          </label>
          <button type='submit'>Añadir nuevo evento</button>
        </div>
      </form>
  </div>
    ) 
};

export default NewEvent;
