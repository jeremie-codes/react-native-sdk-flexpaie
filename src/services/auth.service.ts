import { getClient, setToken } from '../core/client';
import { config } from '../core/config';

export const authenticate = async () => {
  const client = getClient();

  const res = await client.post('/api/auth/v1/authenticate', {
    username: config.username,
    password: config.password,
  });

  setToken(res.data.token);

  return res.data;
};
