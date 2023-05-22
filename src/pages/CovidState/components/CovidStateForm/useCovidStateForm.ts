import { covidStateContext } from '@/context';
import { changeDateValue } from '@/helpers';
import { ChangeEvent, useContext } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export const useCovidStateForm = () => {
  const { data, setCovidStateData } = useContext(covidStateContext);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const watchAntibodiesTest = useWatch({
    name: ['had_covid', 'had_antibody_test'],
  });
  const hadAntibodyTest = watchAntibodiesTest[0] === 'yes';
  const antibodies = watchAntibodiesTest[1] === 'true' && hadAntibodyTest;
  const covidSicknessDate =
    watchAntibodiesTest[1] === 'false' && hadAntibodyTest;

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
