export default function validateDepartmentInfo(values, context, isEdit) {

    let errors = {};

    // Id validation
    if(isEdit === false) {
        if (!values.id) {
            errors.id = 'ID kitöltése kötelező';
        } else if (values.id.length !== 6) {
            errors.id = 'Az ID-nak 6 karakter hosszúnak kell lennie';
        } else if (!values.id.match("^([a-zA-Z]{2})(([0-9]{4}))?$")) {
            errors.id = "Az ID-nak 2 betűt és 4 számot kell tartalmaznia"
        } else if (uniqueId(values, context)) {
            errors.id = "Az ID-nak egyedinek kell lennie"
        }
    }
    
    //name validation
    if (!values.name.trim()) {
      errors.name = 'Név kitöltése kötelező';
    }
    return errors;
  }

function uniqueId(values, context){
    let unique = false;
    context.filter((department) =>{
        if(department.id === values.id){
            return unique = true;
        }
    })
    return unique;
}