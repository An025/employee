import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContextProvider } from './context/EmployeeContext';
import { DepartmentContextProvider } from './context/DepartmentContext';

ReactDOM.render(
  <AppContextProvider>
    <DepartmentContextProvider>
      <App />
    </DepartmentContextProvider>
  </AppContextProvider>,
  document.getElementById('root')
);

