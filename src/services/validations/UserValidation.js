import * as yup from 'yup';

export const userSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, 'Must be 8 characters or more')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'Atleast one special character: @$!%*#?&')
    .matches(/\d+/, 'Atleast one number')
    .required(),
});
