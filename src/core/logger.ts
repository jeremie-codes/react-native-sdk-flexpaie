export const log = (message: string, data?: any) => {
  console.log(`[SDK LOG]: ${message}`, data || '');
};
