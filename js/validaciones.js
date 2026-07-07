
export function validarCamposVacios(email,password){
    email = email.trim()
    password = password.trim()

    if(!email || !password){ //maneja ambos casos de validacion (campos sin contenido "")
        return false
    }
    return true //ya sabemos que tendran contenido
};

export function validarFormatoEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular 
    return regex.test(email) //esto comprueba si cumple con el patron de texto o no y devuelve true o false
};


export function normalizarEmail(email){
    return email.trim().toLowerCase()
};


export function emailYaExiste(email,usuarios){
    const check = usuarios.some( user => normalizarEmail(user.email) === normalizarEmail(email))
    return check
};

export function compararPassword(passwordIngresada, passwordGuardada){ //implementar bycript
    if(passwordIngresada === passwordGuardada){
        return true
    }
    return false
};
