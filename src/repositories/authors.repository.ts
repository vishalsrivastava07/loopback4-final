import {inject, Getter} from '@loopback/core';
import {repository, HasManyRepositoryFactory} from '@loopback/repository';
import {SequelizeCrudRepository} from '@loopback/sequelize';
import {LoopbackintroDataSource} from '../datasources';
import {Authors, AuthorsRelations, Books} from '../models';
import {BooksRepository} from './books.repository';

export class AuthorsRepository extends SequelizeCrudRepository<
  Authors,
  typeof Authors.prototype.authorId,
  AuthorsRelations
> {
  public readonly books: HasManyRepositoryFactory<Books, typeof Authors.prototype.authorId>;

  constructor(
    @inject('datasources.loopbackintro') dataSource: LoopbackintroDataSource,
    @repository.getter('BooksRepository') protected booksRepositoryGetter: Getter<BooksRepository>,
  ) {
    super(Authors, dataSource);

    // Initialize the books relation
    this.books = this.createHasManyRepositoryFactoryFor(
      'books',
      booksRepositoryGetter,
    );

    // Register the relation with the correct key
    this.registerInclusionResolver('books', this.books.inclusionResolver);
  }
}
