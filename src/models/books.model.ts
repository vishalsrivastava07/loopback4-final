import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Authors} from './authors.model';
import {Categories} from './categories.model';

@model()
export class Books extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,  // UUIDs should be manually generated
    defaultFn: 'uuidv4()', // Auto-generate UUID
  })
  bookId?: string;
  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      maxLength: 100,
      minLength: 3,
      errorMessage: 'Title must be at least 3 characters and maximum 100 characters',
    }
  })
  title: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      maxLength: 20,
      minLength: 13,
      errorMessage: 'ISBN must be at least 3 characters and maximum 20 characters',
    }
  })
  isbn: string;

  @property({
    type: 'date',
    required: true,
  })
  publicationDate: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      minimum: 0,
      errorMessage: {
        required: 'The price is required.',
        minimum: 'The price must be a positive number.',
      },
    },
  })
  price: number;

  @property({
    type: 'number',
    default: 0,
    jsonSchema: {
      minimum: 0,
      errorMessage: 'Leave it blank or enter Positive number'
    },
  })
  discountPrice?: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      minimum: 1,
      errorMessage: 'To add book quantity at least or more than 1'
    },
  })
  quantity: number;

  @belongsTo(() => Authors, {name: 'authors'})
  authorId: string;  // Changed to UUID

  @belongsTo(() => Categories, {name: 'categories'})
  categoryId: string;  // Changed to UUID

  constructor(data?: Partial<Books>) {
    super(data);
  }
}

export interface BooksRelations {
  // describe navigational properties here
}

export type BooksWithRelations = Books & BooksRelations;
