import React,{useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import validate from './validateInfo';
import useForm from './useForm';
import DepartmentContext from "../../context/DepartmentContext";

const EmployeeForm = ({submitForm, title, isEdit, currentEmployee}) => {
    const [depContext] = useContext(DepartmentContext);
    const [selectedDepartment] = useState(depContext[0].id);
    const options = depContext.map((department) => ({
      value: department.id,
      label: department.name,
    }))

    const state = (isEdit === false)?{
      id: '',
      familyName: '',
      givenName: '',
      birthDate: '',
      daysOffLimit: 30,
      daysOff: 3,
      department: selectedDepartment,
    }:{
      id: currentEmployee.id,
      familyName: currentEmployee.familyName,
      givenName: currentEmployee.givenName,
      birthDate: currentEmployee.birthDate,
      daysOffLimit: currentEmployee.daysOffLimit,
      daysOff: currentEmployee.daysOff,
      department: currentEmployee.department,
    }

    const { handleChange, handleSubmit, handleEdit, values, errors } = useForm(submitForm, validate,selectedDepartment, state, isEdit );

    return (
      <div className='form-content'>
        <form onSubmit={isEdit? handleEdit: handleSubmit} className='form' noValidate>
          <h1>
            {title}
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>ID</label>
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
            <label className='form-label'>Család név</label>
            <input
              className='form-input'
              type='text'
              name='familyName'
              placeholder='Család név'
              value={values.familyName}
              onChange={handleChange}
            />
            {errors.familyName && <p>{errors.familyName}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Útónév</label>
            <input
              className='form-input'
              type='text'
              name='givenName'
              placeholder='Útónév'
              value={values.givenName}
              onChange={handleChange}
            />
            {errors.givenName && <p>{errors.givenName}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Születésnap</label>
            <input
              className='form-input'
              type='date'
              name='birthDate'
              value={values.birthdate}
              onChange={handleChange}
            />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Összes szabadnap</label>
            <input
              className='form-input'
              type='number'
              name='daysOffLimit'
              value={values.daysOffLimit}
              onChange={handleChange}
            />
            {errors.daysOffLimit && <p>{errors.daysOffLimit}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Felhasznált szabadnap</label>
            <input
              className='form-input'
              type='number'
              name='daysOff'
              value={values.daysOff}
              onChange={handleChange}
            />
            {errors.daysOff && <p>{errors.daysOff}</p>}
          </div>
         

          <div className='form-inputs'>
            <label className='form-label'>Szervezet</label>
            <select className="form-input"
              name="department"
              value={values.department}
              onChange={handleChange}>
              {options.map((option)=>(
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
        </div>
            <button className='form-input-btn' type='submit'>
              Mentés
            </button>
            <Link to="/" className='form-input-btn cancel'>
              <span className="center">Mégse</span>
            </Link>
        </form>
      </div>
    );
  
}

export default EmployeeForm
