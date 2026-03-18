export class SDKError extends Error {
  public code?: string;
  public status?: number;
  public details?: any;

  constructor(
    message: string,
    options?: {
      code?: string;
      status?: number;
      details?: any;
    }
  ) {
    super(message);
    this.name = 'SDKError';
    this.code = options?.code;
    this.status = options?.status;
    this.details = options?.details;
  }
}
