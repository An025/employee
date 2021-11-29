import React, { useState, useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import DepartmentContext from "../context/DepartmentContext";
import "./style/App.css"


const DataList = () => {
    const [employees, setEmployeeContext] = useContext(EmployeeContext);
    const departments = useContext(DepartmentContext);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [daysOff, setDaysOff] = useState(6);
    
    const [foundEmployee, setfoundEmployee] = useState(employees);

    const getDepartmentNameById = (id) => departments[0].find(item => item.id === id);

    const getEmployeeByDeparrment= (arr) => {
        console.log(arr)
        return arr.map(id =>
            employees
            .filter((item) => item.department === id))
    }

    const searchId = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
          const results = employees.filter((employee) => {
            return employee.id.toLowerCase().startsWith(keyword.toLowerCase());
          });
          setfoundEmployee(results);
        } else {
          setfoundEmployee(employees);
        }
        setId(keyword);
      };


      const searchName = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
          const results = employees.filter((employee) => {
            return (`${employee.familyName.toLowerCase()} ${employee.givenName.toLowerCase()}`).includes(keyword.toLowerCase())
        });
          setfoundEmployee(results);
        } else {
          setfoundEmployee(employees);
        }
        setName(keyword);
      };


    const searchDepartment = (e) => {
        const keyword = e.target.value;
        if(keyword !== '') {
            let depart = departments[0].filter((department)=>{
                return department.name.toLowerCase().startsWith(keyword.toLowerCase())
            }).map((item) => item.id)
            setfoundEmployee(getEmployeeByDeparrment(depart)[0])
        }
        else{
            setfoundEmployee(employees)
        }
    };

      const searchDaysOff = (e) => {
        const keyword = parseInt(e.target.value);
    
        if (keyword !== '') {
          const results = employees.filter((employee) => {
            return (employee.daysOff < keyword)
        });
          setfoundEmployee(results);
        } else {
          setfoundEmployee(employees);
        }
    
        setDaysOff(keyword);
      };

    return (
      <div className="container">
        <table>
            <thead>
                <tr>
                    <td>Dolgozó azonosítója</td>
                    <td>Dolgozó teljes neve</td>
                    <td>Foglalkoztató szervezeti egység neve</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <input
                        type="search"
                        value={id}
                        onChange={searchId}
                        placeholder="Keresés..."
                        className="table-input"
                    />
                    </td>
                    <td>
                    <input
                        type="search"
                        value={name}
                        onChange={searchName}
                        placeholder="Keresés..."
                        className="table-input"
                    />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Keresés.."
                            onChange={searchDepartment}
                            className="table-input"
                        />
                    </td>
                </tr>
              
                    {foundEmployee && foundEmployee.length > 0 ? (
                    foundEmployee.map((employee) => (
                        <tr key={employee.id} >
                            <td >{employee.id}</td>
                            <td>{`${employee.familyName} ${employee.givenName}`}</td>
                            <td>{getDepartmentNameById(employee.department)!== undefined?
                                getDepartmentNameById(employee.department).name: "Törölt szervezeti egység"}</td>
                        </tr>
                    ))
                    ) : (
                    <p>Nincs Találat!</p>
                    )}
            </tbody>
        </table>
          <div className="content">
            <p className="daysOff">Dolgozók, akiknek kevesebb szabadságuk van mint </p>
            <input
                type="number"
                value={daysOff}
                onChange={searchDaysOff}
                className="daysOff-input"
            />
          </div>
        </div>
    )
}

export default DataList
