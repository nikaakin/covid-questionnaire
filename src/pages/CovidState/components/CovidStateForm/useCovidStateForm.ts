import { useCovidStateContext } from '@/context';
import { changeDateValue } from '@/helpers';
import { ChangeEvent, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export const useCovidStateForm = () => {
  const { data, setCovidStateData } = useCovidStateContext();

  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  const hadAntibodyTest = data.had_covid === 'yes';
  const antibodies = data.had_antibody_test === 'true' && hadAntibodyTest;
  const covidSicknessDate =
    data.had_antibody_test === 'false' && hadAntibodyTest;

  useEffect(() => {
    trigger();
  }, [trigger]);

  const dateRegisterArguments = (
    valueInContext: string,
    key: string,
    required: boolean
  ) => ({
    shouldUnregister: true,
    required: required ? 'სავალდებულოა ველის შევსება' : undefined,
    validate: (value: string) => {
      if (!required && value === '') return true;

      if (value.match(/[a-z]/gi) !== null) {
        return 'თარიღი არასწორია';
      }

      const split = value.split('/');
      const date = new Date(`20${split[2]}-${split[1]}-${split[0]}`).getTime();
      if (isNaN(date)) return 'თარიღი არასწორია';

      if (value.length < 8) return 'თარიღი არასწორია';
      return true;
    },
    onChange(event: ChangeEvent<HTMLInputElement>) {
      changeDateValue(
        event.target.value,
        setCovidStateData,
        valueInContext || '',
        key
      );
    },
  });

  return {
    hadAntibodyTest,
    antibodies,
    covidSicknessDate,
    dateRegisterArguments,
    register,
    errors,
    data,
    setCovidStateData,
  };
};
