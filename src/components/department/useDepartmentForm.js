import { useState, useContext } from 'react';
import DepartmentContext from '../../context/DepartmentContext';
import { useHistory } from "react-router-dom";


const useDepartmentForm = (props, validate, state, isEdit) => {
  let history = useHistory();
  const [depContext, setDepContext] = useContext(DepartmentContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState(state);
  let errors = isSubmitting ? validate(values, depContext, isEdit) : {}

  const handleChange = e => {
      const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value
    });
    errors = validate(values, depContext, isEdit)
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true)
    if (isSubmitting && Object.keys(errors).length === 0) {
      setDepContext([...depContext, values]);
      history.push('/department')
    }
  };

  const handleEdit = e => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      const updatedArr = [...depContext].filter(
          (department) => department.id !== state.id
      );
      updatedArr.push(values)
      setDepContext(updatedArr);
      history.push('/department')
    }
    setIsSubmitting(true)
  };


  return {handleChange, handleSubmit, handleEdit, values, errors};
};

export default useDepartmentForm;
