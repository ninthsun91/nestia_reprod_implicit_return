import { Controller, Get, Res } from '@nestjs/common';
import { TypedRoute } from '@nestia/core';
import { v4 } from 'uuid';
import { AppService } from './app.service';
import { TryCatch, ERROR } from './types';
import { GuestSigninResBody } from './dto';
import { GERROR } from 'types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @TypedRoute.Get('/local')
  // async useImportTypes(
  //   @Res({ passthrough: true }) res: PublicResponse,
  // ): Promise<TryCatch<
  //     GuestSigninResBody,
  //     | typeof ERROR.UNAUTHORIZED
  // >> {
  //   const userId = v4();

  //   return createHttpResponse<GuestSigninResBody>({ userId });
  // }

  // @TypedRoute.Get('/local')
  // async useImportTypes(
  //   @Res({ passthrough: true }) res: PublicResponse,
  // ): Promise<ResponseForm<GuestSigninResBody> | typeof ERROR.UNAUTHORIZED> {
  //   const userId = v4();

  //   return createHttpResponse<GuestSigninResBody>({ userId });
  // }
  @TypedRoute.Get('/local')
  async useImportTypes(
    @Res({ passthrough: true }) res: PublicResponse,
  ): Promise<typeof ERROR.BAD_REQUEST> {
    const userId = v4();

    return ERROR.BAD_REQUEST
  }

  // @TypedRoute.Get('/local')
  // async useImportTypes(
  //   @Res({ passthrough: true }) res: PublicResponse,
  // ): Promise<ResponseForm<GuestSigninResBody>> {
  //   const userId = v4();

  //   return createHttpResponse<GuestSigninResBody>({ userId });
  // }

  // @TypedRoute.Get('/global')
  // async useGlobalTypes(
  //   @Res({ passthrough: true }) res: PublicResponse,
  // ): Promise<GTryCatch<
  //     GuestSigninResBody,
  //     | typeof GERROR.UNAUTHORIZED
  // >> {
  //   const userId = v4();

  //   return createHttpResponse<GuestSigninResBody>({ userId });
  // }
}

export type ResponseForm<T> = {
  result: true;
  code: 1000;
  data: T;
};

export const createHttpResponse = <T>(data: T): ResponseForm<T> => ({
  result: true,
  code: 1000,
  data,
} as const);
