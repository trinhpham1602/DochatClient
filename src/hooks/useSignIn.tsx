import React, { useCallback, useState } from 'react';
import { logInAPI } from '../api/auth/auth-api';
import { useAsyncFn } from './useAsyncFn';
import { useAuth } from './useAuth';

export const useLogIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setAuth } = useAuth();
  const logInFn = useCallback(async () => {
    const payload: Req.LogIn = {
      email,
      password,
    };
    const res = await logInAPI(payload);
    setAuth(res.data);
  }, [email, password, setAuth]);
  const { isLoading, excuteFn: logIn } = useAsyncFn({ fn: logInFn });

  return {
    isLoading,
    logIn,
    setEmail,
    setPassword,
  };
};
