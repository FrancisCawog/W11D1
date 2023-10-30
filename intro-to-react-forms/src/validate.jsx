function validate(user) {

    // name
    if (!user.name) return false;


    //email
    const atSymbolCount = user.email.split('@').length - 1;
    if (atSymbolCount !== 1) {
      return false;
    }
    const dotIndex = user.email.indexOf('.');
    const atIndex = user.email.indexOf('@');
    if (dotIndex === -1 || dotIndex < atIndex) {
      return false;
    }
    if (user.email[0] === '@' || user.email[0] === '.' || user.email.slice(-1) === '@' || user.email.slice(-1) === '.') {
      return false;
    }

    //phone number

    if (user.phoneNumber) {
        const check = user.phoneNumber.split("-");
        if (check.concat.length !== 10) return false;

        let numericPhoneNumber = "";
        
        for (let i = 0; i < user.phoneNumber.length; i++) {
            const char = user.phoneNumber[i];
        
            if (char >= '0' && char <= '9') {
            numericPhoneNumber += char;
            }
        }

        if (numericPhoneNumber.length !== 10) {
            return false;
        }
    }


    // phone type
    if (user.phoneNumber && (user.phoneType === undefined)) return false;  

    // bio
    if (user.bio.length > 280) return false;


    return true;
}

export default validate;