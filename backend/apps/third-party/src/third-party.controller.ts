import { Controller, Get } from '@nestjs/common';
import { ThirdPartyService } from './third-party.service';

@Controller()
export class ThirdPartyController {
  constructor(private readonly thirdPartyService: ThirdPartyService) {}

  @Get()
  getHello(): string {
    return this.thirdPartyService.getHello();
  }
}
