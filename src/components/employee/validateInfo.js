export default function validateInfo(values, context, isEdit) {

    let errors = {};

    // Id validation
    if(isEdit === false){
        if (!values.id) {
            errors.id = 'ID kitöltése kötelező';
        } else if (values.id.length !== 6) {
            errors.id = 'Az ID-nak 6 karakter hosszúnak kell lennie';
        }else if(!values.id.match("^([a-zA-Z]{2})(([0-9]{4}))?$")){
            errors.id = "Az ID-nak 2 betűt és 4 számot kell tartalmaznia"
        }else if(uniqueId(values, context)){
            errors.id = "Az ID-nak egyedinek kell lennie"
        }
    }
    
    //Familyname validation
    if (!values.familyName.trim()) {
      errors.familyName = 'Családnév kitöltése kötelező';
    }

    //GivenName validation
    if (!values.givenName.trim()) {
        errors.givenName = 'Útónév kitöltése kötelező';
    }
    
    //DaysOfLimit validation
    if (parseInt(values.daysOffLimit)< 0) {
        errors.daysOffLimit = 'A szabadnapok számának pozitívnak kell lennie';
    }

    //DaysOff validation
    if (parseInt(values.daysOff)< 0) {
        errors.daysOff = 'A felhasznált szabadnapok számának pozitívnak kell lennie';
    }

    return errors;
  }

function uniqueId(values, context){
    let unique = false;
    console.log(context)
    context.filter((employee) =>{
        if(employee.id === values.id){
           return unique = true;
        }
    })
    return unique;
}
