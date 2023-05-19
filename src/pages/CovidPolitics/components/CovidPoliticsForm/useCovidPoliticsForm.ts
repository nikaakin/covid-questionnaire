import { covidPoliticsContext } from '@/context';
import { useContext } from 'react';
import { useWatch } from 'react-hook-form';

export const useCovidPoliticsForm = () => {
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
  return {
    firstAdditionalInput,
    secondAdditionalInput,
    thirdAdditionalInput,
    fourthAdditionalInput,
    fifthAdditionalInput,
    setCovidPoliticsData,
  };
};
