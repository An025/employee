import React from 'react'
import { Link } from 'react-router-dom';
import validate from '../department/validateDepartmentInfo';
import useDepartmentForm from "./useDepartmentForm";
const DepartmentForm = ({submitForm, title, isEdit, currentDepartment}) => {

    const state = (isEdit === false)?{
        id: '',
        name: '',
    }:{
        id: currentDepartment.id,
        name: currentDepartment.name,
    }

    const { handleChange, handleSubmit, handleEdit, values, errors } = useDepartmentForm(submitForm, validate, state, isEdit );

    return (
        <div className='form-content'>
        <form onSubmit={isEdit? handleEdit: handleSubmit} className='form' noValidate>
          <h1 >
              {title}
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>Azonosító</label>
            <input
              className='form-input'
              type='text'
              name='id'
              placeholder='Egyedi azonosító(2 karakter betű 4 karakter szám)'
              value={values.id}
              onChange={handleChange}
              disabled = {isEdit? true: false}
              style = {{color: "gray"}}
            />
            {errors.id && <p>{errors.id}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Név</label>
            <input
              className='form-input'
              type='text'
              name='name'
              placeholder='Szervezet név'
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
         
          <button className='form-input-btn' type='submit'>
            Mentés
          </button>
          <Link to="/department" className='form-input-btn cancel'>
            Mégse
          </Link>
        </form>
      </div>
    );
}

export default DepartmentForm
