import { pageContext } from '@/context';
import { getLocaleStorageValues } from '@/helpers';
import { FormType } from '@/helpers/type';
import { routes } from '@/routes';
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
    formState: { isValid },
  } = form;

  const onSubmit = (data: any) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  useEffect(() => {
    if (routes.indexOf(location.pathname.slice(1)) > page) {
      navigate('/');
    }
    const defaultValues = getLocaleStorageValues(name);
    let key: keyof FormType;

    for (key in defaultValues) {
      setValue(key, defaultValues[key]);
    }
  }, [location.pathname, navigate, page, name, setValue]);

  const previousPage = () => {
    setShowValue(false);
    setForwardValue(false);
    setTimeout(() => {
      setCurrentPage(page - 1);
      navigate('/' + routes[page - 1]);
    }, 300);
  };

  const nextPage = () => {
    setShowValue(false);
    setForwardValue(true);
    setTimeout(() => {
      setCurrentPage(page + 1);
      navigate('/' + routes[page + 1]);
    }, 300);
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
  };
};
