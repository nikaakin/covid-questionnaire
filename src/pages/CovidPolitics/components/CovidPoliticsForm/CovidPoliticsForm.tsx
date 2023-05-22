import { RadioButton } from '@/components';
import { useCovidPoliticsForm } from './useCovidPoliticsForm';

export const CovidPoliticsForm = () => {
  const {
    dontPostponeLink,
    hadAndPlanningLink,
    iAmWaiting,
    notPlanningLink,
    vaccinationStage,
    setCovidPoliticsData,
  } = useCovidPoliticsForm();

  return (
    <div
      className='text-neutral-850 pt-10 flex-1'
      onClick={() => setCovidPoliticsData('had_new', 'text')}
    >
      <RadioButton
        name='had_vaccine'
        title='უკვე აცრილი ხარ?*'
        values={[
          { ka: 'კი', en: 'true' },
          { ka: 'არა', en: 'false' },
        ]}
        setOnChange={setCovidPoliticsData}
        isRequired
      />
      {vaccinationStage && (
        <RadioButton
          name='vaccination_stage'
          title='აირჩიე რა ეტაპზე ხარ*'
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
      {iAmWaiting && (
        <RadioButton
          name='i_am_waiting'
          title='რას ელოდები?*'
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

      {dontPostponeLink && (
        <p className='text-xl pl-16'>
          რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
          <br />
          <a href='https://booking.moh.gov.ge/' className='text-cyan-650'>
            https://booking.moh.gov.ge/
          </a>
        </p>
      )}
      {hadAndPlanningLink && (
        <p className='text-xl pl-16'>
          <a href='https://booking.moh.gov.ge/' className='text-cyan-650'>
            👉 https://booking.moh.gov.ge/
          </a>
        </p>
      )}
      {notPlanningLink && (
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
