import {
    required,
    minLength,
    maxLength,
    
} from "vuelidate/lib/validators";


export const validateForget = {
    validations: {
        formData: {
            email: {
                required,
                maxLength: maxLength(64),
                
            }
        }
    }
};
