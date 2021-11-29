import React, { useContext } from "react";
import DepartmentContext from "../../context/DepartmentContext";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const DepartmentList = () => {
  const [departmentCtx, setDepartmentCtx] = useContext(DepartmentContext);
  const history = useHistory();

  const options = departmentCtx.map((department) => ({
    value: department.id,
    label: department.name,
  }))
  let selectedDepartment = departmentCtx.length ? departmentCtx[0].id : '';

  const setSelectedDepartment = (id) => {
    selectedDepartment = id;
  };
  const removeDepartment = () => {
    const removeArr = [...departmentCtx].filter(
      (department) => department.id !== selectedDepartment
    );
    setDepartmentCtx(removeArr);
  };

  const editDepartment = (e) =>{
    history.push(`/department/${selectedDepartment}`);
  }

  return (
    <div className="container">
      <h1 className="title">Szervezeti Egység</h1>
      <div className="content">
        <Link to="/departmentform">
          <button type="btn" className="btn">Létrehozás</button>
        </Link>
        <form>
          <select
              className="input"
              onChange={(e) => setSelectedDepartment(e.target.value)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
            <button disabled={!options.length} className="btn"  onClick={editDepartment}>Módosítás</button>
          <button className="btn" onClick={removeDepartment} disabled={!options.length}>Törlés</button>
        </form>
      </div>

    </div>
  );
};

export default DepartmentList;
