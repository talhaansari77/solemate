import moment from "moment";
import Toast from "react-native-root-toast";

export const EditValidate = (data, submitError, setSubmitError) => {
  if (data.images.length < 2) {
    return Toast.show("All images are required");
  } else if (!data.firstName) {
    return setSubmitError({
      ...submitError,
      firstNameError: "First Name is required",
    });
  } else if (!data.lastName) {
    return setSubmitError({
      ...submitError,
      lastNameError: "Last Name is required",
    });
  } else if (!data.aboutMe) {
    return setSubmitError({
      ...submitError,
      aboutError: "About me is required",
    });
  } else if (!data.aboutMe) {
    return setSubmitError({
      ...submitError,
      aboutError: "About me is required",
    });
  } else if (data.personality.length < 1) {
    return Toast.show("Atleast one Personality is required");
  } else if (data.characteristics.length < 1) {
    return Toast.show("Atleast one Characteristics is required");
  } else if (!data.dob) {
    return setSubmitError({
      ...submitError,
      birthdayError: "Birthday is required",
    });
  } else if (moment().diff(data.dob, "years", false) < 17) {
    return setSubmitError({
      ...submitError,
      birthdayError: "Your age must be 17",
    });
  } else if (!data.familyOrigin) {
    return setSubmitError({
      ...submitError,
      familyError: "Family Origin is required",
    });
  } else if (!data.language) {
    return setSubmitError({
      ...submitError,
      languageError: "Language is required",
    });
  } else if (!data.gender) {
    return setSubmitError({
      ...submitError,
      genderError: "Gender is required",
    });
  } else if (!data.location) {
    return setSubmitError({
      ...submitError,
      editlocationError: "Location is required",
    });
  } else if (!data.height) {
    return setSubmitError({
      ...submitError,
      heightError: "height is required",
    });
  } else if (!data.employment) {
    return setSubmitError({
      ...submitError,
      employmentError: "Employment is required",
    });
  } else if (!data.occupation) {
    return setSubmitError({
      ...submitError,
      occupationError: "Occupation is required",
    });
  } else if (!data.religion) {
    return setSubmitError({
      ...submitError,
      religionError: "Religion is required",
    });
  } else if (!data.religiousity) {
    return setSubmitError({
      ...submitError,
      religiousityError: "Religiousity is required",
    });
  } else if (!data.prayerLevel) {
    return setSubmitError({
      ...submitError,
      prayerLevelError: "Prayer Level is required",
    });
  } else if (!data.sector) {
    return setSubmitError({
      ...submitError,
      sectorError: "Sector is required",
    });
  } else if (!data.martialHistory) {
    return setSubmitError({
      ...submitError,
      martialHistoryError: "Martial History is required",
    });
  } else if (!data.martialTimming) {
    return setSubmitError({
      ...submitError,
      martialTimmingError: "Martial Timming is required",
    });
  }
  // whatKids:whatKids,
  // hasKids:hasKids,
  // willRelocate:willRelocate,
  // jobStatus:jobStatus,
  // drinking:drinking,
  // smoking:smoking,
  else if (!data.whatKids) {
    return Toast.show("Whats Kids is required");
  } else if (!data.hasKids) {
    return Toast.show("Has Kids is required");
  } else if (!data.willRelocate) {
    return Toast.show("willing Relocate is required");
  } else if (!data.jobStatus) {
    return Toast.show("Job Status is required");
  } else if (!data.drinking) {
    return Toast.show("Drinking is required");
  } else if (!data.smoking) {
    return Toast.show("Smoking is required");
  } else {
    return true;
  }
};
