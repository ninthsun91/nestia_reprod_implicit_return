export type KeyOfError = keyof typeof ERROR_RESPONSE;
export type ValueOfError = (typeof ERROR_RESPONSE)[KeyOfError];
export type Try<T> = ResponseForm<T>;
export type TryCatch<T, E extends ValueOfError> = ResponseForm<T> | E;

const ERROR_RESPONSE = {
  EXAMPLE_ERROR: { result: false, code: 4000, data: 'Example error' },

  FORBIDDEN: { result: false, code: 4001, data: 'Forbidden', statusCode: 403 },
  UNAUTHORIZED: { result: false, code: 4002, data: 'Unauthorized', statusCode: 401 },
  BAD_REQUEST: { result: false, code: 4003, data: 'Bad request', statusCode: 400 },
  INTERNAL_SERVER_ERROR: { result: false, code: 4004, data: 'Internal server error', statusCode: 500 },

} as const;

type EnsureErrorResponse<T extends Record<string, ErrorResponse>> = {
  [K in keyof T]: T[K];
};
export const ERROR: EnsureErrorResponse<typeof ERROR_RESPONSE> = ERROR_RESPONSE;
