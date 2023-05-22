import { covidStateContext } from '@/context';
import { changeDateValue } from '@/helpers';
import { ChangeEvent, useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export const useCovidStateForm = () => {
  const { data, setCovidStateData } = useContext(covidStateContext);

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
    trigger('had_antibody_test');
  }, [hadAntibodyTest, trigger]);

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
    onChange(event: ChangeEvent<HTMLInputElement>) {
      changeDateValue(
        event.target.value,
        setCovidStateData,
        data.covid_sickness_date || ''
      );
    },
  };

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
