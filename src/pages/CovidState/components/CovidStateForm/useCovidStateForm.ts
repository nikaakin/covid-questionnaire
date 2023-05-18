import { covidStateContext } from '@/context';
import { changeDateValue } from '@/helpers';
import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export const useCovidStateForm = () => {
  const {
    data,
    setCovidStateData,
    firstAdditionalInput,
    secondAdditionalInput,
    thirdAdditionalInput,
    setAntibodies,
  } = useContext(covidStateContext);

  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    trigger();
  }, []);

  const dateRegisterArguments = {
    shouldUnregister: true,
    required: 'სავალდებულოა ველის შევსება',
    validate: (value: string) => {
      if (value.match(/[a-z]/gi) !== null) {
        return 'თარიღი არასწორია';
      }
      if (value.length < 8) return 'თარიღი არასწორია';
      return true;
    },
    onChange(event: any) {
      changeDateValue(
        event.target.value,
        setCovidStateData,
        data.covid_sickness_date || ''
      );
    },
  };

  return {
    firstAdditionalInput,
    secondAdditionalInput,
    thirdAdditionalInput,
    dateRegisterArguments,
    register,
    errors,
    setAntibodies,
    data,
  };
};
