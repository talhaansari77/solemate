export const EditValidate=(data,submitError,setSubmitError)=>{

    if(!data.firstName){
        return setSubmitError({...submitError,firstNameError:"First Name is required"})

    }
    if(!data.lastName){
        return setSubmitError({...submitError,lastNameError:"Last Name is required"})

    }
    if(!data.aboutMe){
        return setSubmitError({...submitError,aboutError:"About me is required"})

    }

    
    return true

}