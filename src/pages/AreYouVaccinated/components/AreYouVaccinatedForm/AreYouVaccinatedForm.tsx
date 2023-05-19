import { RadioButton, TextArea } from '@/components';
import { useAreYouVaccinated } from './useAreYouVaccinated';

export const AreYouVaccinatedForm = () => {
  const { register, setAreYouVaccinatedData, submit } = useAreYouVaccinated();

  return (
    <div className='text-neutral-850 pt-10 flex-1'>
      <RadioButton
        setOnChange={setAreYouVaccinatedData}
        name='non_formal_meetings'
        title='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'
        values={[
          { ka: 'კვირაში ორჯერ', en: 'twice_a_week' },
          { ka: 'კვირაში ერთხელ', en: 'once_a_week' },
          { ka: 'ორ კვირაში ერთხელ', en: 'once_in_a_two_weeks' },
          { ka: 'თვეში ერთხელ', en: 'once_in_a_month' },
        ]}
        isRequired
      />

      <RadioButton
        setOnChange={setAreYouVaccinatedData}
        name='number_of_days_from_office'
        title='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'
        values={[
          { ka: '0', en: '0' },
          { ka: '1', en: '1' },
          { ka: '2', en: '2' },
          { ka: '3', en: '3' },
          { ka: '4', en: '4' },
          { ka: '5', en: '5' },
        ]}
        isRequired
      />

      <TextArea
        name='covid_sickness_date'
        register={register('covid_sickness_date', {
          shouldUnregister: true,
          onChange: (event) =>
            setAreYouVaccinatedData('covid_sickness_date', event.target.value),
        })}
        title='რას ფიქრობ ფიზიკურ შეკრებებზე?'
      />

      <TextArea
        name='tell_us_your_opinion_about_us'
        register={register('tell_us_your_opinion_about_us', {
          shouldUnregister: true,
          onChange: (event) =>
            setAreYouVaccinatedData(
              'tell_us_your_opinion_about_us',
              event.target.value
            ),
        })}
        title='რას ფიქრობ არსებულ გარემოზე: 
        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
      />

      <div className='text-right'>
        <button
          onClick={() => {
            submit();
          }}
          className='text-lg font-bold text-white px-8 py-4 rounded-[42px] bg-cyan-750 '
        >
          დასრულება
        </button>
      </div>
    </div>
  );
};
