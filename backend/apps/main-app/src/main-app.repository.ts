import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Book } from './schemas/main-app.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class MainAppRepository extends AbstractRepository<Book> {
  protected readonly logger = new Logger(MainAppRepository.name);
  constructor(
    @InjectModel(Book.name) BookModel: Model<Book>,
    @InjectConnection() connection: Connection,
  ) {
    super(BookModel, connection);
  }
}
