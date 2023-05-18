import { covidStateContext } from '@/context';
import { changeDateValue } from '@/helpers';
import { useContext, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export const useCovidStateForm = () => {
  const { data, setCovidStateData, setAntibodies } =
    useContext(covidStateContext);

  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    trigger();
  }, [trigger]);

  const watchAntibodiesTest = useWatch({
    name: ['had_covid', 'had_antibody_test'],
  });
  const firstAdditionalInput = watchAntibodiesTest[0] === 'yes';
  const secondAdditionalInput = watchAntibodiesTest[1] === 'true';
  const thirdAdditionalInput = watchAntibodiesTest[1] === 'false';

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
