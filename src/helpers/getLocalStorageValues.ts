export const getLocaleStorageValues = () => {
  const formValues = JSON.parse(localStorage.getItem('form') || '{}') as {};
  const page = +(localStorage.getItem('page') || '0');
  return {
    ...formValues,
    page,
  };
};
