import {inject} from '@loopback/core';
import {SequelizeCrudRepository} from '@loopback/sequelize'
import {LoopbackintroDataSource} from '../datasources';
import {Authors, AuthorsRelations} from '../models';

export class AuthorsRepository extends SequelizeCrudRepository<
  Authors,
  typeof Authors.prototype.authorId,
  AuthorsRelations
> {
  constructor(
    @inject('datasources.loopbackintro') dataSource: LoopbackintroDataSource,
  ) {
    super(Authors, dataSource);
  }
}
