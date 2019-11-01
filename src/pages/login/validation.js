import {
    required,
    minLength,
    maxLength,    
} from "vuelidate/lib/validators";
import axios from "axios";

export const validateLogin = {
    validations: {
        formData: {
            email: {
                required,                
                maxLength: maxLength(64)                
            },          
            password: {
                required,
                maxLength: maxLength(32)
            }        
        }
    }
};
