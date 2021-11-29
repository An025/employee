import { useState, useContext } from 'react';
import EmployeeContext from "../../context/EmployeeContext";
import { useHistory } from "react-router-dom";

const useForm = (props, validate, selectedDepartment, state, isEdit) => {
  let history = useHistory();
  const [employeeContext, setEmployeeContext] = useContext(EmployeeContext);
  
  const [values, setValues] = useState(state);
  const [isSubmitting, setIsSubmitting] = useState(false);
  let errors = isSubmitting ? validate(values, employeeContext, isEdit) : {}

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    });
    errors = validate(values, employeeContext, isEdit)
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true)
    if (isSubmitting && Object.keys(errors).length === 0) {
      setEmployeeContext([...employeeContext, values]);
      history.push('/employee')
    }
  };

  const handleEdit = e => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      const updatedArr = [...employeeContext].filter(
        (employee) => employee.id !== state.id
      );
      updatedArr.push(values)
      setEmployeeContext(updatedArr);
      history.push('/') 
    }
    setIsSubmitting(true)
  };


  return {handleChange, handleSubmit, handleEdit, values, errors};
};

export default useForm;
