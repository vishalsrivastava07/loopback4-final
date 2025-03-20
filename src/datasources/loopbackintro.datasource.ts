import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {SequelizeDataSource} from '@loopback/sequelize'

const config = {
  name: 'loopbackintro',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'vishal',
  database: 'loopbackintro'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LoopbackintroDataSource extends SequelizeDataSource
  implements LifeCycleObserver {
  static dataSourceName = 'loopbackintro';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.loopbackintro', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
