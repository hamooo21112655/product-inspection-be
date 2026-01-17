import { Injectable, ParseIntPipe, BadRequestException } from '@nestjs/common';

@Injectable()
export class GlobalParseIntPipe extends ParseIntPipe {
  constructor() {
    super({
      exceptionFactory: () =>
        new BadRequestException('Provided parameter must be an integer!'),
    });
  }
}
