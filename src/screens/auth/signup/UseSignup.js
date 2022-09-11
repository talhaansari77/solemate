import {
  validateEmail,
  checkCharPassword,
  checkNum,
} from "../../../utils/Email_Password_Validation";

export const ValidateInput = (email, password, submitError, setSubmitError) => {
  if (!email) {
    return setSubmitError({ ...submitError, emailError: "Email is Required" });
  }
  if (!validateEmail(email)) {
    return setSubmitError({ ...submitError, emailError: "Enter Valid Email" });
  }
  if (!password) {
    return setSubmitError({
      ...submitError,
      passwordError: "Password is Required",
    });
  }

  if (!checkCharPassword(password)) {
    // setSubmitError({...submitError,passwordError:"Password is eight"})
  }
  if (password.search(/[!/>@<"#$%&()¥|?>|='+*:~^@;]/) == -1) {
    // setSubmitError({...submitError,passwordError:"must one symbol"})
  }
  if (!checkNum(password)) {
    // setSubmitError({...submitError,passwordError:"must one symbol"})
  }
  return true;
};
