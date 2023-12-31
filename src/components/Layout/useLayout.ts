import { routes } from '@/config';
import { usePageContext } from '@/context';
import { FormType, getLocaleStorageValues } from '@/helpers';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

export const useLayout = () => {
  const { page, setCurrentPage, show, setShowValue, setForwardValue } =
    usePageContext();
  const navigate = useNavigate();
  const location = useLocation();
  const name = routes[page];
  const initialValues = getLocaleStorageValues(name);

  const form = useForm({
    mode: 'onChange',
    shouldUnregister: true,
    defaultValues: {
      ...initialValues,
    },
  });

  const {
    setValue,
    handleSubmit,
    trigger,
    formState: { isValid, errors },
  } = form;

  const onSubmit = (data: FormType) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  useEffect(() => {
    if (routes.indexOf(location.pathname.slice(1)) > page) {
      navigate(`/${routes[page]}`);
    } else {
      setCurrentPage(routes.indexOf(location.pathname.slice(1)));
    }
    const defaultValues = getLocaleStorageValues(name);

    for (const key in defaultValues) {
      setValue(key, defaultValues[key]);
      trigger(key);
    }
  }, [
    location.pathname,
    navigate,
    page,
    name,
    setValue,
    trigger,
    setCurrentPage,
  ]);

  const previousPage = () => {
    setShowValue(false);
    setForwardValue(false);
    setTimeout(() => {
      setCurrentPage(page - 1);
      navigate('/' + routes[page - 1]);
    }, 300);
  };

  const nextPage = () => {
    trigger().then((isValid) => {
      if (!isValid) return;
      setShowValue(false);
      setForwardValue(true);
      setTimeout(() => {
        setCurrentPage(page + 1);
        navigate('/' + routes[page + 1]);
      }, 300);
    });
  };

  return {
    page,
    previousPage,
    nextPage,
    show,
    setShowValue,
    initialValues,
    onSubmit,
    handleSubmit,
    isValid,
    form,
    errors,
  };
};
