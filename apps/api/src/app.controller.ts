import { Controller, Get, Res } from '@nestjs/common';
import { TypedRoute } from '@nestia/core';
import { v4 } from 'uuid';
import { AppService } from './app.service';
import { TryCatch, ERROR } from './types';
import { GuestSigninResBody } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @TypedRoute.Get('/signin')
  async guestSignIn(
    @Res({ passthrough: true }) res: PublicResponse,
  ): Promise<TryCatch<
      GuestSigninResBody,
      | typeof ERROR.UNAUTHORIZED
  >> {
    const userId = v4();

    return createHttpResponse<GuestSigninResBody>({ userId });
  }
}

export const createHttpResponse = <T>(data: T): ResponseForm<T> => ({
  result: true,
  code: 1000,
  data,
} as const);
