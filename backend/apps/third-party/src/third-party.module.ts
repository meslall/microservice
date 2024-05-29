import { Module } from '@nestjs/common';
import { ThirdPartyController } from './third-party.controller';
import { ThirdPartyService } from './third-party.service';

@Module({
  imports: [],
  controllers: [ThirdPartyController],
  providers: [ThirdPartyService],
})
export class ThirdPartyModule {}