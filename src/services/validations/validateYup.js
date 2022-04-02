import _ from 'lodash';

export const validateYup = (fields, schema, setErrors) => {
  let errors = {};

  try {
    schema.validateSync(fields, { abortEarly: false });
  } catch (err) {
    errors = err.inner.reduce(
      (acc, curr) => ({ ...acc, [curr.path]: curr.message }),
      {}
    );
    console.log(err.inner);
  }

  setErrors(errors);

  return _.isEmpty(errors);
};
