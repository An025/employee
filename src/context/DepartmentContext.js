import React, {useState} from 'react';
const DepartmentContext = React.createContext({

});

export const DepartmentContextProvider = (props)=>{
    const [department, setDepartment] = useState([
        {
            id: 'bb2567', 
            name: 'Péntzügyi osztály'
        },
        {
            id: 'bb2568', 
            name: 'Személyügy'
        },
        {
            id: 'bb2569', 
            name: 'Igazgatóság'
        },
        {
            id: 'bb2570', 
            name: 'Szakszervezet'
        }
      ]);

    return <DepartmentContext.Provider value={
        [department, setDepartment]
    }
    >
        {props.children}
    </DepartmentContext.Provider>
}

export default DepartmentContext;