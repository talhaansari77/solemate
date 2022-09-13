import moment from "moment";
import Toast from "react-native-root-toast";


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
    if(!data.dob){
        return setSubmitError({...submitError,birthdayError:"Birthday is required"})
    }
    if (moment().diff(data.dob, "years", false) < 17){
        return setSubmitError({...submitError,birthdayError:"Your age must be 17"})


    }
  

    if(!data.familyOrigin){
        return setSubmitError({...submitError,familyError:"Family Origin is required"})
    }
    
    if(!data.language){
        return setSubmitError({...submitError,languageError:"Language is required"})
    }

    if(!data.gender){
        return setSubmitError({...submitError,genderError:"Gender is required"})
    }
    if(!data.location){
        return setSubmitError({...submitError,editlocationError:"Location is required"})

    }
    if(!data.height){
        return setSubmitError({...submitError,heightError:"height is required"})
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
    // whatKids:whatKids,
    // hasKids:hasKids,
    // willRelocate:willRelocate,
    // jobStatus:jobStatus,
    // drinking:drinking,
    // smoking:smoking,

    if(!data.whatKids){
        return  Toast.show("Whats Kids is required",)
    }
    if(!data.hasKids){
        return  Toast.show("Has Kids is required")
    } 
       if(!data.willRelocate){
        return  Toast.show("willing Relocate is required")
    } 
       if(!data.jobStatus){
        return  Toast.show("Job Status is required")
    } 
       if(!data.drinking){
        return  Toast.show("Drinking is required")
    }
    if(!data.smoking){
        return  Toast.show("Smoking is required")
    }



  

 
    
    
    return true

}