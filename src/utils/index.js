export const inputValidation = input => {
    if(!input){
        return 'This is a required field';
    }
    else if (input.length > 80){
        return "This field can't exceed 80 characters"
    }
    return null;
}

export const nameValidation = input => {
    if(!input){
        return 'This is a required field';
    }
    else if (/^[a-z ,.'-]+$/i.test(input) === false){
        return "Please enter your full name"
    }
    return null;
}

export const emailValidation = emails =>{
    if (!emails){
        return 'This is a required field';
    }
    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const invalidEmails = emails.split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);
    if (invalidEmails.length > 0){
        return `The following emails are invalid: ${invalidEmails}`
    }
    if (emails.split(',').length > 200){
        return 'No more than 200 email recipients are allowed'
    }
    return null;
}

export const ordinals = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];