import {
  useAreYouVaccinatedContext,
  useCovidPoliticsContext,
  useCovidStateContext,
  usePageContext,
  usePersonalInfoContext,
} from '@/context';
import { CovidPoliticsApiType, CovidStateApiType } from '@/helpers';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useAreYouVaccinated = () => {
  const { setShowValue, setForwardValue, setCurrentPage } = usePageContext();
  const { setAreYouVaccinatedData, data: areYouVaccinatedData } =
    useAreYouVaccinatedContext();
  const { data: personalInfoData } = usePersonalInfoContext();
  const { data: covidPoliticsData } = useCovidPoliticsContext();
  const { data: covidStateData } = useCovidStateContext();
  console.log(covidStateData);

  const navigate = useNavigate();

  const { register, trigger } = useFormContext();

  const submit = () => {
    trigger().then((isValid) => {
      if (!isValid) return;

      let covidState: CovidStateApiType = {
        had_covid: covidStateData.had_covid,
      };
      if (covidStateData.had_covid === 'yes') {
        if (covidStateData.had_antibody_test === 'false') {
          const dateSplit = covidStateData.covid_sickness_date!.split('/');
          const date = new Date(
            +dateSplit[2] + 2000,
            +dateSplit[1] - 1,
            +dateSplit[0]
          );
          covidState = {
            ...covidState,
            had_antibody_test: false,
            covid_sickness_date: date,
          };
        } else {
          covidState = {
            ...covidState,
            had_antibody_test: true,
            antibodies: {
              number: +covidStateData.number! || 0,
              test_date: new Date(+covidStateData.test_date!) || new Date(),
            },
          };
        }
      }

      let covidPolitics: CovidPoliticsApiType = {
        had_vaccine: covidPoliticsData.had_vaccine === 'true' ? true : false,
      };

      if (covidPoliticsData.had_vaccine === 'true') {
        covidPolitics = {
          ...covidPolitics,
          vaccination_stage: covidPoliticsData.vaccination_stage,
        };
      } else {
        covidPolitics = {
          ...covidPolitics,
          i_am_waiting: covidPoliticsData.i_am_waiting,
        };
      }

      const all = {
        ...personalInfoData,
        ...covidState,
        ...covidPolitics,
        ...areYouVaccinatedData,
      };
      fetch('https://covid19.devtest.ge/api/create', {
        method: 'POST',
        body: JSON.stringify(all),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }).then((res) => {
        if (res.ok === true) {
          setShowValue(false);
          setForwardValue(true);
          setTimeout(() => {
            setCurrentPage(0);
            localStorage.clear();
            navigate('/thank-you');
          }, 300);
        }
      });
    });
  };

  return {
    register,
    submit,
    setAreYouVaccinatedData,
  };
};
