import React, {useContext} from 'react'
import {useParams} from "react-router-dom";
import DepartmentContext from "../../context/DepartmentContext";
import DepartmentForm from "./DepartmentForm";

const EditDepartment = () => {
    const deptContext = useContext(DepartmentContext);
    let { id } = useParams();

    const currentDepartment = deptContext[0].find(item => item.id === id)
    return(
        <div className='form-container department'>
            <DepartmentForm title={"Módosítás"} isEdit={true} currentDepartment={currentDepartment}/>
        </div>
    )
}

export default EditDepartment
