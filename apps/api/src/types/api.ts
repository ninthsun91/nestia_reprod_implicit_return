type KeyOfError = keyof typeof ERROR_RESPONSE;
type ValueOfError = (typeof ERROR_RESPONSE)[KeyOfError];
export type Try<T> = ResponseForm<T>;
export type TryCatch<T, E extends ValueOfError> = ResponseForm<T> | E;

const ERROR_RESPONSE = {
  EXAMPLE_ERROR: { result: false, code: 4000, data: 'Example error' },

  FORBIDDEN: { result: false, code: 4001, data: 'Forbidden', statusCode: 403 },
  UNAUTHORIZED: { result: false, code: 4002, data: 'Unauthorized', statusCode: 401 },
  BAD_REQUEST: { result: false, code: 4003, data: 'Bad request', statusCode: 400 },
  INTERNAL_SERVER_ERROR: { result: false, code: 4004, data: 'Internal server error', statusCode: 500 },

  USER_NOT_FOUND: { result: false, code: 4100, data: 'User not found.', statusCode: 404 },
  USER_CREATE_FAIL: { result: false, code: 4101, data: 'Failed to create user.', statusCode: 500 },
  USER_SESSION_STORE_FAIL: { result: false, code: 4102, data: 'Failed to store session.', statusCode: 500 },
  USER_GUEST_CREATE_FAIL: { result: false, code: 4103, data: 'Failed to create guest.', statusCode: 500 },

  PROJECT_NOT_FOUND: { result: false, code: 4200, data: 'Project not found.', statusCode: 404 },
  PROJECT_UPLOAD_FAIL: { result: false, code: 4201, data: 'Failed to upload project.', statusCode: 500 },
  PROJECT_CREATE_FAIL: { result: false, code: 4202, data: 'Failed to create project.', statusCode: 500 },

  PROMPT_QUEUE_ADD_FAIL: { result: false, code: 4300, data: 'Failed to add prompt queue.', statusCode: 500 },
  PROMPT_QUEUE_BUSY: { result: false, code: 4301, data: 'Prompt queue is busy.', statusCode: 500 },
  PROMPT_QUEUE_INVALID_FORM: { result: false, code: 4302, data: 'Invalid prompt form.', statusCode: 400 },

  IMAGE_NOT_FOUND: { result: false, code: 4400, data: 'Image not found.', statusCode: 404 },
  IMAGE_CREATE_FAIL: { result: false, code: 4401, data: 'Failed to create image.', statusCode: 500 },
  IMAGE_LIKE_FAIL: { result: false, code: 4410, data: 'Failed to like image.', statusCode: 500 },
  IMAGE_UNLIKE_FAIL: { result: false, code: 4411, data: 'Failed to unlike image.', statusCode: 500 },
  IMAGE_LIKE_ALREADY: { result: false, code: 4412, data: 'Already liked image.', statusCode: 400 },
  IMAGE_UNLIKE_ALREADY: { result: false, code: 4413, data: 'Already unliked image.', statusCode: 400 },

  COMMENT_NOT_FOUND: { result: false, code: 4500, data: 'Comment not found.', statusCode: 404 },
  COMMENT_CREATE_FAIL: { result: false, code: 4501, data: 'Failed to create comment.', statusCode: 500 },
  COMMENT_UPDATE_FAIL: { result: false, code: 4502, data: 'Failed to update comment.', statusCode: 500 },
  COMMENT_DELETE_FAIL: { result: false, code: 4503, data: 'Failed to delete comment.', statusCode: 500 },
} as const;

type EnsureErrorResponse<T extends Record<string, ErrorResponse>> = {
  [K in keyof T]: T[K];
};
export const ERROR: EnsureErrorResponse<typeof ERROR_RESPONSE> = ERROR_RESPONSE;
