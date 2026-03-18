export interface SDKConfig {
  username: string;
  password: string;
  timeout?: number;
}

export let config: SDKConfig;

export const setConfig = (cfg: SDKConfig) => {
  config = cfg;
};
