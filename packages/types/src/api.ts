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
}

export {};
