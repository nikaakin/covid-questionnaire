import { routes } from '@/config';
import { pageContext } from '@/context';
import { getLocaleStorageValues } from '@/helpers';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

export const useLayout = () => {
  const { page, setCurrentPage, show, setShowValue, setForwardValue } =
    useContext(pageContext);
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

  const onSubmit = (data: any) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  useEffect(() => {
    if (routes.indexOf(location.pathname.slice(1)) > page) {
      navigate('/');
    }
    const defaultValues = getLocaleStorageValues(name);

    for (const key in defaultValues) {
      setValue(key, defaultValues[key]);
    }

    trigger();
  }, [location.pathname, navigate, page, name, setValue, trigger]);

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
