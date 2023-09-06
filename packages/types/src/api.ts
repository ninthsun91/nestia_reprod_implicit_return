declare global {
  type ResponseForm<T> = {
    result: true;
    code: 1000;
    data: T;
  };

  type ErrorResponse = {
    result: false;
    code: number;
    data: string;
    statusCode?: number;
  };

  type ApiResponse = ResponseForm<unknown> | ErrorResponse;

  type GKeyOfError = keyof typeof ERROR_RESPONSE;
  type GValueOfError = (typeof ERROR_RESPONSE)[GKeyOfError];
  type GTry<T> = ResponseForm<T>;
  type GTryCatch<T, E extends GValueOfError> = ResponseForm<T> | E;
}


const ERROR_RESPONSE = {
  EXAMPLE_ERROR: { result: false, code: 4000, data: 'Example error' },

  FORBIDDEN: { result: false, code: 4001, data: 'Forbidden', statusCode: 403 },
  UNAUTHORIZED: { result: false, code: 4002, data: 'Unauthorized', statusCode: 401 },
  BAD_REQUEST: { result: false, code: 4003, data: 'Bad request', statusCode: 400 },
  INTERNAL_SERVER_ERROR: { result: false, code: 4004, data: 'Internal server error', statusCode: 500 },

} as const;

type GEnsureErrorResponse<T extends Record<string, ErrorResponse>> = {
  [K in keyof T]: T[K];
};
export const GERROR: GEnsureErrorResponse<typeof ERROR_RESPONSE> = ERROR_RESPONSE;

