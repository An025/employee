import React from 'react';
import EditDepartment from './components/department/EditDepartment';
import EditEmployee from './components/employee/EditEmployee';
import AddNewEmployee from './components/employee/AddNewEmployee';
import EmployeeList from './components/employee/EmployeeList';
import Navbar from './Navbar';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import DataList from './components/DataList';
import DepartmentList from './components/department/DepartmentList';
import AddNewDepartment from "./components/department/AddNewDepartment";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path="/">
             <EmployeeList/>
        </Route>
        <Route exact path="/employee">
             <EmployeeList/>
        </Route>
        <Route exact path="/employeeform">
             <AddNewEmployee/>
        </Route>
        <Route exact path="/employee/:id">
             <EditEmployee/>
        </Route>
        <Route exact path="/department">
            <DepartmentList/>
        </Route>
        <Route exact path="/departmentform">
            <AddNewDepartment/>
        </Route>
       <Route exact path="/department/:id">
          <EditDepartment/>
       </Route>
        <Route exact path="/datalist">
            <DataList/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;