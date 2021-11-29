import React from 'react';
import EmployeeForm from './EmployeeForm';
import '../style/Form.css'

const AddNewEmployee = () => {
  
    return (
    <div className='form-container employee'>
      <EmployeeForm title={"Új dolgozó hozzáadás"} isEdit={false}/>
    </div>
  );
};

export default AddNewEmployee;
