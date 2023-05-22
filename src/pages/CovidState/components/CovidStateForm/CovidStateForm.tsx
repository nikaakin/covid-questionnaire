import { RadioButton, Input } from '@/components';
import { useCovidStateForm } from '@/pages';

export const CovidStateForm = () => {
  const {
    dateRegisterArguments,
    errors,
    register,
    data,
    antibodies,
    covidSicknessDate,
    hadAntibodyTest,
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

      {hadAntibodyTest && (
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

      {covidSicknessDate && (
        <Input
          placeholder='დდ/თთ/წწ'
          value={data.covid_sickness_date || ''}
          errors={errors}
          name='covid_sickness_date'
          title='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
          register={register(
            'covid_sickness_date',
            dateRegisterArguments(
              data.covid_sickness_date || '',
              'covid_sickness_date',
              true
            )
          )}
        />
      )}

      {antibodies && (
        <>
          <Input
            value={data.test_date || ''}
            register={register(
              'test_date',
              dateRegisterArguments(data.test_date || '', 'test_date', false)
            )}
            errors={errors}
            name='test_date'
            title='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*'
            placeholder='რიცხვი'
          />
          <Input
            register={register('number', {
              shouldUnregister: true,
              validate: (value: string) => {
                if (value !== '' && !Number.isInteger(+value))
                  return 'რიცხვი უნდა იყოს';
                return true;
              },
              onChange: (event) =>
                setCovidStateData('number', event.target.value),
            })}
            errors={errors}
            name='number'
            placeholder='ანტისხეულების რაოდენობა'
          />
        </>
      )}
    </div>
  );
};
