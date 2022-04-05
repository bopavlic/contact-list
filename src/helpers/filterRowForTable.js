export const filterRowForTable = (array, searchValue) => {
  return array.filter(
    ({ firstName, lastName, birthday, mobilePhone, phone, email, pager }) =>
      firstName
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase()) ||
      lastName
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase()) ||
      birthday
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase()) ||
      mobilePhone
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase()) ||
      phone
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase()) ||
      email
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase()) ||
      pager
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase())
  );
};
