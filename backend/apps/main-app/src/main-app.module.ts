/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { MainAppController } from './main-app.controller';
import { MainAppService } from './main-app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { MainAppRepository } from './main-app.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/main-app.schema';
import * as dotenv from 'dotenv';
import

dotenv.config({ path: __dirname + '/.env' });

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      // envFilePath: __dirname + '/.env',
      envFilePath: './apps/main-app/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [MainAppController],
  providers: [MainAppService, MainAppRepository],
})
export class MainAppModule {}
