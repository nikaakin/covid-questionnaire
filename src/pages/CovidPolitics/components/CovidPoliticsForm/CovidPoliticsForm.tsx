import { RadioButton } from '@/components';
import { covidPoliticsContext } from '@/context';
import { useContext } from 'react';
import { useWatch } from 'react-hook-form';

export const CovidPoliticsForm = () => {
  const { setCovidPoliticsData } = useContext(covidPoliticsContext);

  const watchValues = useWatch({
    name: ['had_vaccine', 'vaccination_stage', 'i_am_waiting'],
  });
  const firstAdditionalInput = watchValues[0] === 'true';
  const secondAdditionalInput = watchValues[0] === 'false';
  const thirdAdditionalInput =
    watchValues[1] === 'first_dosage_and_not_registered_yet';
  const fourthAdditionalInput =
    watchValues[2] === 'had_covid_and_planning_to_be_vaccinated';
  const fifthAdditionalInput = watchValues[2] === 'not_planning';

  return (
    <div
      className='text-neutral-850 pt-10 flex-1'
      onClick={() => setCovidPoliticsData('had_new', 'text')}
    >
      <RadioButton
        name='had_vaccine'
        title='გაქვს გადატანილი Covid-19?*'
        values={[
          { ka: 'კი', en: 'true' },
          { ka: 'არა', en: 'false' },
        ]}
        setOnChange={setCovidPoliticsData}
        isRequired
      />
      {firstAdditionalInput && (
        <RadioButton
          name='vaccination_stage'
          title='გაქვს გადატანილი Covid-19?*'
          values={[
            {
              ka: 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე',
              en: 'first_dosage_and_registered_on_the_second',
            },
            { ka: 'სრულად აცრილი ვარ', en: 'fully_vaccinated' },
            {
              ka: 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე',
              en: 'first_dosage_and_not_registered_yet',
            },
          ]}
          setOnChange={setCovidPoliticsData}
          isRequired
        />
      )}
      {secondAdditionalInput && (
        <RadioButton
          name='i_am_waiting'
          title='გაქვს გადატანილი Covid-19?*'
          values={[
            {
              ka: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
              en: 'registered_and_waiting',
            },
            { ka: 'არ ვგეგმავ', en: 'not_planning' },
            {
              ka: 'გადატანილი მაქვს და ვგეგმავ აცრას',
              en: 'had_covid_and_planning_to_be_vaccinated',
            },
          ]}
          setOnChange={setCovidPoliticsData}
          isRequired
        />
      )}

      {firstAdditionalInput && thirdAdditionalInput && (
        <p className='text-xl pl-16'>
          რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
          <br />
          <a href='https://booking.moh.gov.ge/' className='text-cyan-650'>
            https://booking.moh.gov.ge/
          </a>
        </p>
      )}
      {secondAdditionalInput && fourthAdditionalInput && (
        <p className='text-xl pl-16'>
          <a href='https://booking.moh.gov.ge/' className='text-cyan-650'>
            👉 https://booking.moh.gov.ge/
          </a>
        </p>
      )}
      {secondAdditionalInput && fifthAdditionalInput && (
        <p className='text-xl pl-16'>
          ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
          გაკეთება. <br /> <br /> 👉 რეგისტრაციის ბმული <br />
          <a href='https://booking.moh.gov.ge/' className='text-cyan-650'>
            https://booking.moh.gov.ge/
          </a>
        </p>
      )}
    </div>
  );
};
