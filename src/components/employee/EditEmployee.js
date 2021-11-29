import React, {useContext} from 'react'
import {useParams} from "react-router-dom";
import EmployeeContext from "../../context/EmployeeContext";
import EmployeeForm from './EmployeeForm';

const EditEmployee = () => {
    const [employeeContext] = useContext(EmployeeContext);
    let { id } = useParams();
    const currentEmployee = employeeContext.find(item => item.id === id)
    
    return(
        <div className='form-container employee'>
        <EmployeeForm title={"Módosítás"} isEdit={true} currentEmployee={currentEmployee}/>
      </div>
    )
}

export default EditEmployee
