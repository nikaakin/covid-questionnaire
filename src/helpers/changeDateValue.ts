export const changeDateValue = (
  targetValue: string,
  setCovidStateData: (_: string, __: string) => void,
  covid_sickness_date: string | null
) => {
  let value: string;
  if (
    covid_sickness_date!.length > targetValue.length &&
    targetValue.length === 7
  ) {
    value = targetValue;
  } else {
    value =
      covid_sickness_date!.length > targetValue.length
        ? targetValue.slice(0, -1)
        : targetValue;
  }

  const splitted = value.split('/');
  const lenght = splitted.slice(-1)[0].length;

  if (value.length === 8) {
    setCovidStateData('covid_sickness_date', value);
    return;
  }

  if (covid_sickness_date?.length === 8 && value.length === 9) return;

  if (lenght > 0 && lenght % 2 === 0) {
    setCovidStateData('covid_sickness_date', value + '/');
    return;
  }
  setCovidStateData('covid_sickness_date', value);
};
