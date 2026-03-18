import { getClient } from '../core/client';
import { log } from '../core/logger';
import { authenticate } from './auth.service';

export const sendSms = async (phone: string, message: string) => {
  const client = getClient();

  try {
    const res = await client.post('/api/v1/sms/send', {
      phone,
      message,
    });

    return res.data;
  } catch (error: any) {
    // retry si token expiré
    if (error.response?.data?.message?.includes('Token')) {
      await authenticate();

      const retry = await client.post('/api/v1/sms/send', {
        phone,
        message,
      });

      return retry.data;
    }

    log(error.response.data.message, error.response.data);
    throw error;
  }
};
