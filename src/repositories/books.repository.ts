import {inject} from '@loopback/core';
import {SequelizeCrudRepository} from '@loopback/sequelize'
import {LoopbackintroDataSource} from '../datasources';
import {Books, BooksRelations} from '../models';

export class BooksRepository extends SequelizeCrudRepository<
  Books,
  typeof Books.prototype.bookId,
  BooksRelations
> {
  constructor(
    @inject('datasources.loopbackintro') dataSource: LoopbackintroDataSource,
  ) {
    super(Books, dataSource);
  }
}
