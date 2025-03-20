import {inject} from '@loopback/core';
import {SequelizeCrudRepository} from '@loopback/sequelize'
import {LoopbackintroDataSource} from '../datasources';
import {Categories, CategoriesRelations} from '../models';

export class CategoriesRepository extends SequelizeCrudRepository<
  Categories,
  typeof Categories.prototype.categoryId,
  CategoriesRelations
> {
  constructor(
    @inject('datasources.loopbackintro') dataSource: LoopbackintroDataSource,
  ) {
    super(Categories, dataSource);
  }
}
