export const getLocaleStorageValues = () => {
  // TODO add type to formValues
  const formValues = JSON.parse(localStorage.getItem('form') || '{}');
  const currentPage = +(localStorage.getItem('currentPage') || '0');
  return {
    ...formValues,
    currentPage,
  };
};
