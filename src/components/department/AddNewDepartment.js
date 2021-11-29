import React from 'react';
import DepartmentForm from "./DepartmentForm";
import "../style/Form.css"
const AddNewDepartment = () => {


    return (
        <div className='form-container department'>
            <DepartmentForm title={"Új szervezet hozzáadás"} isEdit={false}/>
        </div>
    );
};
export default AddNewDepartment;
