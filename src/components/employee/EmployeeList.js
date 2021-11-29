import React, {useContext} from "react";
import EmployeeContext from "../../context/EmployeeContext";
import {Link} from 'react-router-dom';
import "./../style/App.css";
import { useHistory } from "react-router-dom";

const EmployeeList = () => {
  const history = useHistory();
  const [employeeContext, setEmployeeContext] = useContext(EmployeeContext);
  const options = employeeContext.map((employee) => ({
    value: employee.id,
    label: `${employee.familyName + " " + employee.givenName}`,
  }))

  let selectedEmployee = employeeContext.length ? employeeContext[0].id : '';

  const setSelectedEmployee = (id) => {
    selectedEmployee = id;
  };

  const removeEmployee = () => {
    const removeArr = [...employeeContext].filter(
      (employee) => employee.id !== selectedEmployee
    );
    setEmployeeContext(removeArr);
  };

  const editEmployee = (e) =>{
    history.push(`/employee/${selectedEmployee}`);
  }

  return (
    <div className="container">
      <h1 className="title">Dolgozók</h1>
      <div className="content">
        <Link to="/employeeform"  >
          <button className="btn" type="btn">Létrehozás</button>
        </Link>
        <div>
          <select
              className="input"
              onChange={(e) => setSelectedEmployee(e.target.value)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
            <button className="btn" disabled={!options.length}  onClick={editEmployee}>Módosítás</button>
          <button className="btn" onClick={() => removeEmployee()} disabled={!options.length}>Törlés</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
