import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPartyController } from './third-party.controller';
import { ThirdPartyService } from './third-party.service';

describe('ThirdPartyController', () => {
  let thirdPartyController: ThirdPartyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ThirdPartyController],
      providers: [ThirdPartyService],
    }).compile();

    thirdPartyController = app.get<ThirdPartyController>(ThirdPartyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(thirdPartyController.getHello()).toBe('Hello World!');
    });
  });
});
