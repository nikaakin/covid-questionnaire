import { covidPoliticsContext } from '@/context';
import { useContext } from 'react';
import { useWatch } from 'react-hook-form';

export const useCovidPoliticsForm = () => {
  const { setCovidPoliticsData } = useContext(covidPoliticsContext);

  const watchValues = useWatch({
    name: ['had_vaccine', 'vaccination_stage', 'i_am_waiting'],
  });
  const vaccinationStage = watchValues[0] === 'true';
  const iAmWaiting = watchValues[0] === 'false';
  const dontPostponeLink =
    watchValues[1] === 'first_dosage_and_not_registered_yet' &&
    vaccinationStage;
  const hadAndPlanningLink =
    watchValues[2] === 'had_covid_and_planning_to_be_vaccinated' && iAmWaiting;
  const notPlanningLink = watchValues[2] === 'not_planning' && iAmWaiting;
  return {
    vaccinationStage,
    iAmWaiting,
    dontPostponeLink,
    hadAndPlanningLink,
    notPlanningLink,
    setCovidPoliticsData,
  };
};
