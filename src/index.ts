import {CharityAppApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {CharityAppApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new CharityAppApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
