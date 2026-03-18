import { it, expect } from 'vitest';
import FlexpaySDk from 'react-native-sdk-flexpaie-sms';

it('init should return code 0', async () => {
  const sdk = new FlexpaySDk({
    username: 'flexremit',
    password: 'flexremitinfoset',
  });

  const response = await sdk.init();
  expect(response).contains({ code: '0' });
});
