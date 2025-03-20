import {Entity, hasMany, model, property} from '@loopback/repository';
import {Books} from './books.model';

@model()
export class Authors extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,  // UUIDs should be manually generated
    defaultFn: 'uuidv4()', // Auto-generate UUID
  })
  authorId?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      minLength: 3,
      errorMessage: {
        required: 'The Author Name is required.',
      },
    },
  })
  authorName: string;

  @hasMany(() => Books, {keyTo: 'authorId'})
  books: Books[];

  constructor(data?: Partial<Authors>) {
    super(data);
  }
}

export interface AuthorsRelations {
  // describe navigational properties here
}

export type AuthorsWithRelations = Authors & AuthorsRelations;
