import { useState } from 'react';

export const useAuth = () => {
  const [auth, setAuth] = useState<Res.TokenInfo>();

  return {
    setAuth,
  };
};
