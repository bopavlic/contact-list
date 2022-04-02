import * as yup from 'yup';

export const contactSchema = yup.object({
  firstName: yup.string().max(20, 'Must be 20 characters or less').required(),
  lastName: yup.string().max(30, 'Must be 30 characters or less').required(),
});
