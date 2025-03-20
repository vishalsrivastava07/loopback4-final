import {Entity, hasMany, model, property} from '@loopback/repository';
import {Books} from './books.model';

@model()
export class Categories extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,  // UUIDs should be generated manually
    defaultFn: 'uuidv4()', // Auto-generate UUID
  })
  categoryId?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      minLength: 3,
      errorMessage: {
        required: 'The Genre is required.',
      },
    },
  })
  genre: string;

  @hasMany(() => Books, {keyTo: 'categoryId'})
  books: Books[];

  constructor(data?: Partial<Categories>) {
    super(data);
  }
}

export interface CategoriesRelations {
  // describe navigational properties here
}

export type CategoriesWithRelations = Categories & CategoriesRelations;

