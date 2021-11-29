import React, {useState} from 'react';
const EmployeeContext = React.createContext({

});

export const AppContextProvider = (props)=>{
    const [employees, setEmployees] = useState([
        {
          id: "cb2567",
          familyName: "Gipsz",
          givenName: "Jakab",
          birthDate: "",
          daysOffLimit: 30,
          daysOff: 5,
          department: "bb2567",
        },
        {
          id: "ab2568",
          familyName: "Kiss",
          givenName: "János",
          birthDate: "",
          daysOffLimit: 30,
          daysOff: 2,
          department: "bb2568",
        },
        {
          id: "ab2570",
          familyName: "Kovács",
          givenName: "Sándor",
          birthDate: "",
          daysOffLimit: 30,
          daysOff: 4,
          department: "bb2568",
        },
      ]);

    return <EmployeeContext.Provider value={
        [employees, setEmployees]
    }
    >
        {props.children}
    </EmployeeContext.Provider>
}

export default EmployeeContext;