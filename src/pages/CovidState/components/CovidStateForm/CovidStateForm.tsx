import { RadioButton } from '@/components/RadioButton';
import { useCovidStateForm } from './useCovidStateForm';

export const CovidStateForm = () => {
  const { clearErrors, errors, register, setError, setValue } =
    useCovidStateForm();
  return (
    <div className='text-neutral-850 pt-10 flex-1'>
      <RadioButton
        name='had_covid'
        title='გაქვს გადატანილი Covid-19?*'
        values={[
          { ka: 'კი', en: 'yes' },
          { ka: 'არა', en: 'no' },
          { ka: 'ახლა მაქვს', en: 'have_right_now' },
        ]}
      />

      <RadioButton
        name='had_antibody_test'
        title='ანტისხეულების ტესტი გაქვს გაკეთებული?*'
        values={[
          { ka: 'კი', en: 'true' },
          { ka: 'არა', en: 'false' },
        ]}
      />
    </div>
  );
};
