export const getLocaleStorageValues = (key: string) => {
  const formValues = JSON.parse(localStorage.getItem(key) || '{}');
  return {
    ...formValues,
  };
};
