import {
    required,
    minLength,
    maxLength,
    sameAs
} from "vuelidate/lib/validators";
import axios from "axios";

export const validateRegistration = {
    validations: {
        formData: {
            email: {
                required,
                maxLength: maxLength(64),
                async isUnique(value) {
                    if (!value || value === "") return true;

                    const res = await axios.post("/auth/exists-email", {
                        email: value
                    });

                    return res.data;
                }
            },
            username: {
                required,
                maxLength: maxLength(16),
                async isUnique(value) {
                    if (!value || value === "") return true;

                    const res = await axios.post("/auth/exists-username", {
                        username: value
                    });
                    return res.data;
                }
            },
            password: {
                required,
                maxLength: maxLength(32)
            },
            confirmPassword: {
                sameAsPassword: sameAs("password")
            }
        }
    }
};
