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

    if(!data.familyOrigin){
        return setSubmitError({...submitError,familyError:"Family Origin is required"})
    }

    if(!data.language){
        return setSubmitError({...submitError,languageError:"Language is required"})
    }

    if(!data.employment){
        return setSubmitError({...submitError,employmentError:"Employment is required"})
    }

    if(!data.occupation){
        return setSubmitError({...submitError,occupationError:"Occupation is required"})
    }

    if(!data.religion){
        return setSubmitError({...submitError,religionError:"Religion is required"})
    }

    if(!data.religiousity){
        return setSubmitError({...submitError,religiousityError:"Religiousity is required"})
    }

    if(!data.prayerLevel){
        return setSubmitError({...submitError,prayerLevelError:"Prayer Level is required"})
    }

    if(!data.sector){
        return setSubmitError({...submitError,sectorError:"Sector is required"})
    }

    if(!data.martialHistory){
        return setSubmitError({...submitError,martialHistoryError:"Martial History is required"})
    }

    if(!data.martialTimming){
        return setSubmitError({...submitError,martialTimmingError:"Martial Timming is required"})
    }

    if(!data.month){
        return setSubmitError({...submitError,monthError:"Month is required"})
    }

    if(!data.editLocation){
        return setSubmitError({...submitError,editlocationError:"Location is required"})

    }
    
    
    return true

}