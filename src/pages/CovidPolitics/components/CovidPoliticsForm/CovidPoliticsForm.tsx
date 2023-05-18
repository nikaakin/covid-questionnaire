import { RadioButton } from '@/components';
import { covidPoliticsContext } from '@/context';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

export const CovidPoliticsForm = () => {
  const { data, setCovidPoliticsData } = useContext(covidPoliticsContext);
  const { register } = useFormContext();

  return (
    <div className='text-neutral-850 pt-10 flex-1'>
      <RadioButton
        name='had_covid'
        title='გაქვს გადატანილი Covid-19?*'
        values={[
          { ka: 'კი', en: 'true' },
          { ka: 'არა', en: 'false' },
        ]}
        setOnChange={setCovidPoliticsData}
        isRequired
      />
    </div>
  );
};
