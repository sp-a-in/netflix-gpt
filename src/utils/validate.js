import { MAIL_VALIDATOR_REGEX, PASSWORD_VALIDATOR_REGEX } from "./constants"


let checkValidation = (email, password) => {
    let isEmailValid = MAIL_VALIDATOR_REGEX.test(email);
    let isPasswordValid = PASSWORD_VALIDATOR_REGEX.test(password);

    if (!isEmailValid) return "Email is Invalid";
    if (!isPasswordValid) return "Password is Invalid";

    return null;
}

export default checkValidation;