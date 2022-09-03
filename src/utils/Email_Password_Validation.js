export const validateEmail = email => {
    var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,9})$/;
    return re.test(email);
  };
  

  
  export const validatePassword = password => {
    var re = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  };

