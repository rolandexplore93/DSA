function UsernameValidation(str){
    let validRegex = /^[A-Za-z]\w+[A-Za-z0-9]$/g.test(str)
    
    if (typeof str !== 'string') return 'Input is not a string'
    if (str.length < 4 || str.length > 25) return 'false: Username must be between 4-25 characters'
    
    return validRegex
}

console.log(UsernameValidation('RollyDollar_217'))