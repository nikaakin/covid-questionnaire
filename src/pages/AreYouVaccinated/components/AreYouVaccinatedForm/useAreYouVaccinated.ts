import {
  areYouVaccinatedContext,
  covidPoliticsContext,
  covidStateContext,
  pageContext,
  personalInfoContext,
} from '@/context';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useAreYouVaccinated = () => {
  const { setShowValue, setForwardValue, setCurrentPage } =
    useContext(pageContext);
  const { setAreYouVaccinatedData, data: areYouVaccinatedData } = useContext(
    areYouVaccinatedContext
  );
  const { data: personalInfoData } = useContext(personalInfoContext);
  const { data: covidPoliticsData } = useContext(covidPoliticsContext);
  const { data: covidStateData } = useContext(covidStateContext);

  const navigate = useNavigate();

  const { register, trigger } = useFormContext();

  const submit = () => {
    trigger().then((isValid) => {
      if (!isValid) return;

      let covidState: any = { had_covid: covidStateData.had_covid };
      if (covidStateData.had_covid === 'yes') {
        if (covidStateData.had_antibody_test === 'false') {
          covidState = {
            ...covidState,
            had_antibody_test: false,
            covid_sickness_date: covidStateData.covid_sickness_date,
          };
        }
        covidState = {
          ...covidState,
          had_antibody_test: true,
          antibodies: {
            number: +covidStateData.number!,
            test_date: covidStateData.test_date,
          },
        };
      }

      let covidPolitics: any = {
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

      const formData = new FormData();

      Object.keys(all).forEach((key) => {
        formData.append(key, all[key]);
      });

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
