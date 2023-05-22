export const changeDateValue = (
  targetValue: string,
  setCovidStateData: (_: string, __: string) => void,
  valueInContext: string,
  key: string
) => {
  let value: string;

  if (valueInContext!.length > targetValue.length && targetValue.length === 7) {
    value = targetValue;
  } else {
    value =
      valueInContext!.length > targetValue.length
        ? targetValue.slice(0, -1)
        : targetValue;
  }

  const splitted = value.split('/');
  const lenght = splitted.slice(-1)[0].length;

  if (value.length === 8) {
    setCovidStateData(key, value);
    return;
  }

  if (valueInContext?.length === 8 && value.length === 9) return;

  if (lenght > 0 && lenght % 2 === 0) {
    setCovidStateData(key, value + '/');
    return;
  }
  setCovidStateData(key, value);
};
