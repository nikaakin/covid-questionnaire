import { RadioButton, Input } from '@/components';
import { useCovidStateForm } from '@/pages';

export const CovidStateForm = () => {
  const {
    dateRegisterArguments,
    errors,
    register,
    data,
    firstAdditionalInput,
    secondAdditionalInput,
    thirdAdditionalInput,
    setCovidStateData,
  } = useCovidStateForm();

  return (
    <div className='text-neutral-850 pt-10 flex-1'>
      <RadioButton
        setOnChange={setCovidStateData}
        name='had_covid'
        title='გაქვს გადატანილი Covid-19?*'
        values={[
          { ka: 'კი', en: 'yes' },
          { ka: 'არა', en: 'no' },
          { ka: 'ახლა მაქვს', en: 'have_right_now' },
        ]}
        isRequired
      />

      {firstAdditionalInput && (
        <RadioButton
          setOnChange={setCovidStateData}
          name='had_antibody_test'
          title='ანტისხეულების ტესტი გაქვს გაკეთებული?*'
          values={[
            { ka: 'კი', en: 'true' },
            { ka: 'არა', en: 'false' },
          ]}
          isRequired
        />
      )}

      {firstAdditionalInput && thirdAdditionalInput && (
        <Input
          placeholder='დდ/თთ/წწ'
          value={data.covid_sickness_date || ''}
          errors={errors}
          name='covid_sickness_date'
          title='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
          register={register('covid_sickness_date', dateRegisterArguments)}
        />
      )}

      {firstAdditionalInput && secondAdditionalInput && (
        <>
          <Input
            register={register('number', {
              shouldUnregister: true,
              validate: (value: string) => {
                if (value !== '' && !Number.isInteger(+value))
                  return 'რიცხვით უნდა იყოს';
                return true;
              },
              onChange: (event) =>
                setCovidStateData('number', event.target.value),
            })}
            errors={errors}
            name='number'
            title='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*'
            placeholder='რიცხვი'
          />
          <Input
            register={register('test_date', {
              shouldUnregister: true,
              validate: (value: string) => {
                if (value !== '' && !Number.isInteger(+value))
                  return 'რიცხვით უნდა იყოს';
                return true;
              },
              onChange: (event) =>
                setCovidStateData('test_date', event.target.value),
            })}
            errors={errors}
            name='test_date'
            placeholder='ანტისხეულების რაოდენობა'
          />
        </>
      )}
    </div>
  );
};
