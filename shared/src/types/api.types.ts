// every REST response from our server is wrapped in one of these two shapes.

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  error: {
    code: string;    // machine-readable, e.g. "INVALID_CREDENTIALS"
    message: string; // human-readable, e.g. "Email or password is incorrect"
  };
}

// A discriminated union — TypeScript can narrow the type based on `success`
export type ApiResponse<T> = ApiSuccess<T> | ApiError;