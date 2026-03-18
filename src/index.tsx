import { setConfig, type SDKConfig } from './core/config';
import { authenticate } from './services/auth.service';
import { sendSms } from './services/sms.service';

class FlexpaySDK {
  constructor(config: SDKConfig) {
    setConfig(config);
  }

  async init() {
    return await authenticate();
  }

  async sendSms(phone: string, message: string) {
    return await sendSms(phone, message);
  }
}

export default FlexpaySDK;
